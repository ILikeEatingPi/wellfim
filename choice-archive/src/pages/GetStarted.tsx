import React, { useState } from "react";
import {
  Leaf,
  Mail,
  Phone,
  Loader2,
  CheckCircle2,
  ArrowLeft,
} from "lucide-react";

type StandardTrackingFieldKey = string;
type RegisteredCustomFieldId = string;
type TrackingCustomField = { value?: unknown; label: string };
type TrackingFileField = { file?: File; label: string };
type TrackingImageDataField = { dataUrl?: string; label: string };

const postTrackingEvent = (
  trackingPayload: Record<string, unknown> & {
    formData: Record<StandardTrackingFieldKey, unknown>;
    formLabels: Record<StandardTrackingFieldKey, string>;
  },
  options: {
    customFields?: Record<RegisteredCustomFieldId, TrackingCustomField>;
    fileFields?: Record<RegisteredCustomFieldId, TrackingFileField>;
    imageDataFields?: Record<RegisteredCustomFieldId, TrackingImageDataField>;
  } = {},
) => {
  const { customFields = {}, fileFields = {}, imageDataFields = {} } = options;
  const eventPayload = {
    ...trackingPayload,
    formData: { ...trackingPayload.formData },
    formLabels: { ...trackingPayload.formLabels },
  };
  const body = new FormData();

  for (const [key, field] of Object.entries(customFields)) {
    if (field.value === undefined) continue;
    eventPayload.formData[key] = field.value;
    eventPayload.formLabels[key] = field.label;
  }

  for (const [key, field] of Object.entries(imageDataFields)) {
    const dataUrl = field.dataUrl;
    if (!dataUrl) continue;
    if (!dataUrl.startsWith("data:image/")) {
      throw new Error("Image data field must be a data:image/* base64 string");
    }
    eventPayload.formData[key] = dataUrl;
    eventPayload.formLabels[key] = field.label;
  }

  for (const [key, field] of Object.entries(fileFields)) {
    const file = field.file;
    if (!file) continue;
    if (file.size > 50 * 1024 * 1024) {
      throw new Error("File must be 50 MB or smaller");
    }
    eventPayload.formData[key] = {
      filename: file.name,
      size: file.size,
      type: file.type || "application/octet-stream",
    };
    eventPayload.formLabels[key] = field.label;
    body.append(key, file, file.name);
  }

  for (const key of Object.keys(eventPayload.formData)) {
    eventPayload.formLabels[key] ||= key;
  }

  body.append("event", JSON.stringify(eventPayload));

  fetch("https://backend.leadconnectorhq.com/external-tracking/events", {
    method: "POST",
    headers: {
      version: "2021-07-28",
    },
    body,
  }).catch(() => {});
};

const FORM_ID = "wellfim-get-started";
const FORM_NAME = "wellFIM Get Started";
const TRACKING_ID = "tk_51bfc79817614e279aacd3acf07bdc87";
const LOCATION_ID = "keJs62RZQKF5MQndL2Er";
const PROJECT_ID = "1788226803858169228";

type FormState = "idle" | "submitting" | "success" | "error";

const GetStarted: React.FC = () => {
  const [formState, setFormState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [values, setValues] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
  });

  const validate = () => {
    const e: Record<string, string> = {};
    if (!values.first_name.trim())
      e.first_name = "Please enter your first name.";
    if (!values.last_name.trim()) e.last_name = "Please enter your last name.";
    if (!values.email.trim()) {
      e.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      e.email = "Please enter a valid email address.";
    }
    if (!values.phone.trim()) {
      e.phone = "Please enter your phone number.";
    } else {
      const digits = values.phone.replace(/\D/g, "");
      if (digits.length < 10) e.phone = "Please enter a valid phone number.";
    }
    return e;
  };

  const handleChange =
    (field: keyof typeof values) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setValues((v) => ({ ...v, [field]: e.target.value }));
      if (errors[field]) setErrors((er) => ({ ...er, [field]: "" }));
    };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setFormState("submitting");

    const trackingPayload = {
      type: "external_form_submission" as const,
      timestamp: Date.now(),
      formId: FORM_ID,
      formData: {
        first_name: values.first_name.trim(),
        last_name: values.last_name.trim(),
        email: values.email.trim(),
        phone: values.phone.trim(),
      },
      formLabels: {
        first_name: "First Name",
        last_name: "Last Name",
        email: "Email",
        phone: "Phone",
      },
      url: window.location.href,
      title: document.title,
      path: window.location.pathname,
      userAgent: navigator.userAgent,
      trackingId: TRACKING_ID,
      locationId: LOCATION_ID,
      projectId: PROJECT_ID,
      sessionId: crypto.randomUUID(),
      properties: {
        deviceType: /Mobile|Android|iPhone/i.test(navigator.userAgent)
          ? "mobile"
          : "desktop",
        source: "ai_studio",
        projectId: PROJECT_ID,
        formName: FORM_NAME,
      },
    };

    try {
      postTrackingEvent(trackingPayload);
      setFormState("success");
    } catch {
      setFormState("error");
    }
  };

  if (formState === "success") {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#071326] px-6 py-24 text-white">
        <div className="mx-auto max-w-lg text-center">
          <div className="mx-auto mb-6 grid h-20 w-20 place-items-center rounded-full bg-accent/15 text-accent">
            <CheckCircle2 className="h-10 w-10" />
          </div>
          <h1 className="text-4xl font-extrabold sm:text-5xl">You're In!</h1>
          <div className="my-6 flex items-center justify-center gap-3">
            <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-accent"></div>
            <Leaf className="h-5 w-5 text-accent" />
            <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-accent"></div>
          </div>
          <p className="text-xl leading-relaxed text-white/80">
            Thank you for starting your journey with wellFIM. We've received
            your details and will reach out shortly with the next steps to
            optimize, restore, and thrive.
          </p>
          <a
            href="/"
            className="mt-10 inline-flex items-center justify-center gap-2 rounded-xl border-2 border-accent/60 bg-transparent px-8 py-4 text-base font-bold uppercase tracking-wider text-white transition-all hover:border-accent hover:bg-white/10"
          >
            <ArrowLeft className="h-5 w-5" /> Back to Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#071326] text-white">
      <section className="relative mx-auto flex min-h-screen max-w-3xl flex-col justify-center px-6 py-24">
        <div className="mx-auto w-full max-w-xl">
          {/* Header */}
          <div className="mb-10 text-center">
            <h1 className="text-7xl font-extrabold leading-tight sm:text-8xl">
              Start Your <span className="text-accent">Journey</span>
            </h1>
            <div className="my-7 flex items-center justify-center gap-3">
              <div className="h-[1px] w-24 bg-gradient-to-r from-transparent to-accent"></div>
              <Leaf className="h-8 w-8 text-accent" />
              <div className="h-[1px] w-24 bg-gradient-to-l from-transparent to-accent"></div>
            </div>
            <p className="text-3xl leading-relaxed text-white/80">
              Leave your email and phone number and we'll reach out with your
              personalized CHOICE Formula plan. Optimize. Restore. Thrive.
            </p>
          </div>

          {/* Form Card */}
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-2xl backdrop-blur-md sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="first_name"
                  className="mb-2 block text-lg font-semibold uppercase tracking-wider text-white/70"
                >
                  First Name
                </label>
                <input
                  id="first_name"
                  type="text"
                  autoComplete="given-name"
                  value={values.first_name}
                  onChange={handleChange("first_name")}
                  className={`h-16 w-full rounded-lg border bg-white/5 px-5 text-2xl text-white placeholder:text-white/40 outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent ${
                    errors.first_name ? "border-destructive" : "border-white/15"
                  }`}
                  placeholder="Jane"
                />
                {errors.first_name && (
                  <p className="mt-1.5 text-sm text-destructive">
                    {errors.first_name}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="last_name"
                  className="mb-2 block text-lg font-semibold uppercase tracking-wider text-white/70"
                >
                  Last Name
                </label>
                <input
                  id="last_name"
                  type="text"
                  autoComplete="family-name"
                  value={values.last_name}
                  onChange={handleChange("last_name")}
                  className={`h-16 w-full rounded-lg border bg-white/5 px-5 text-2xl text-white placeholder:text-white/40 outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent ${
                    errors.last_name ? "border-destructive" : "border-white/15"
                  }`}
                  placeholder="Doe"
                />
                {errors.last_name && (
                  <p className="mt-1.5 text-sm text-destructive">
                    {errors.last_name}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-5">
              <label
                htmlFor="email"
                className="mb-2 block text-lg font-semibold uppercase tracking-wider text-white/70"
              >
                Email
              </label>
              <div className="relative">
                <Mail className="pointer-events-none absolute left-5 top-1/2 h-7 w-7 -translate-y-1/2 text-white/40" />
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  value={values.email}
                  onChange={handleChange("email")}
                  className={`h-16 w-full rounded-lg border bg-white/5 pl-16 pr-5 text-2xl text-white placeholder:text-white/40 outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent ${
                    errors.email ? "border-destructive" : "border-white/15"
                  }`}
                  placeholder="jane@example.com"
                />
              </div>
              {errors.email && (
                <p className="mt-1.5 text-sm text-destructive">
                  {errors.email}
                </p>
              )}
            </div>

            <div className="mt-5">
              <label
                htmlFor="phone"
                className="mb-2 block text-lg font-semibold uppercase tracking-wider text-white/70"
              >
                Phone Number
              </label>
              <div className="relative">
                <Phone className="pointer-events-none absolute left-5 top-1/2 h-7 w-7 -translate-y-1/2 text-white/40" />
                <input
                  id="phone"
                  type="tel"
                  autoComplete="tel"
                  value={values.phone}
                  onChange={handleChange("phone")}
                  className={`h-16 w-full rounded-lg border bg-white/5 pl-16 pr-5 text-2xl text-white placeholder:text-white/40 outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent ${
                    errors.phone ? "border-destructive" : "border-white/15"
                  }`}
                  placeholder="(555) 123-4567"
                />
              </div>
              {errors.phone && (
                <p className="mt-1.5 text-sm text-destructive">
                  {errors.phone}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={formState === "submitting"}
              className="mt-8 inline-flex h-24 w-full items-center justify-center gap-4 rounded-2xl bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-300 px-8 text-3xl font-extrabold uppercase tracking-wider text-[#071326] shadow-[0_0_60px_6px_rgba(255,200,0,1)] ring-4 ring-yellow-300 transition-all hover:scale-[1.03] hover:brightness-110 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70 animate-float-slow"
            >
              {formState === "submitting" ? (
                <>
                  <Loader2 className="h-9 w-9 animate-spin" /> Sending...
                </>
              ) : (
                <>
                  <Leaf className="h-10 w-10 stroke-[2.5]" /> Start Your Journey
                </>
              )}
            </button>

            {formState === "error" && (
              <p className="mt-4 text-center text-base text-destructive">
                Something went wrong. Please try again.
              </p>
            )}

            <p className="mt-5 text-center text-lg text-white/50">
              By submitting, you agree to be contacted by wellFIM about your
              wellness journey. We respect your privacy.
            </p>
          </form>

          <div className="mt-6 text-center">
            <a
              href="/"
              className="inline-flex items-center gap-2 text-xl text-white/60 transition-colors hover:text-accent"
            >
              <ArrowLeft className="h-6 w-6" /> Back to Home
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetStarted;
