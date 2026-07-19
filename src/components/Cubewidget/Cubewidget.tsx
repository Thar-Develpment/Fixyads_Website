"use client";

import { useState, KeyboardEvent, ChangeEvent, FormEvent } from "react";
import styles from "./Cubewidget.module.css";

export default function CubeWidget() {
  const [visible, setVisible] = useState<boolean>(true);
  const [bannerOpen, setBannerOpen] = useState<boolean>(false);

  // Form states
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    website: "", // honeypot — must stay empty
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [statusMsg, setStatusMsg] = useState("");

  if (!visible) return null;

  const toggleBanner = () => setBannerOpen((prev) => !prev);
  const closeBanner = () => {
    setBannerOpen(false);
    setStatus("idle");
    setStatusMsg("");
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleBanner();
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setStatusMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          service: "Other", // special offer defaults to Other service selection in API
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setStatusMsg(data.error || "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setStatusMsg("Thank you! Your details have been submitted. Our experts will connect with you shortly.");

      // reset form and close modal after 4 seconds
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          website: "",
        });
        setStatus("idle");
        setBannerOpen(false);
      }, 4000);
    } catch (err) {
      console.error(err);
      setStatus("error");
      setStatusMsg("Server error. Please try again later.");
    }
  };

  return (
    <div className={styles.wrapper}>
      {/* Close button for the widget itself */}
      <button
        onClick={() => setVisible(false)}
        aria-label="Remove widget"
        className={styles.closeButton}
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1L11 11M11 1L1 11"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>

      {/* Rotating cube, click to open/toggle lead modal */}
      <div
        className={styles.scene}
        onClick={toggleBanner}
        role="button"
        tabIndex={0}
        aria-label="Open special offer details form"
        aria-expanded={bannerOpen}
        onKeyDown={handleKeyDown}
      >
        <div className={styles.cube}>
          <div className={`${styles.face} ${styles.front}`}>
            <span>30% OFF Every Projects</span>
          </div>
          <div className={`${styles.face} ${styles.back}`}>
            <span>Free Consultation</span>
          </div>
          <div className={`${styles.face} ${styles.right}`}>
            <span>Web development</span>
          </div>
          <div className={`${styles.face} ${styles.left}`}>
            <span>Digital marketing</span>
          </div>
          <div className={`${styles.face} ${styles.top}`}>
            <span>Graphic design</span>
          </div>
          <div className={`${styles.face} ${styles.bottom}`}>
            <span>AI</span>
          </div>
        </div>
      </div>

      {/* Floating Two-Column Lead Modal Overlay */}
      {bannerOpen && (
        <div className={styles.modalOverlay} onClick={closeBanner}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Left Panel: Special Offer Detail */}
            <div className={styles.offerPanel}>
              <div className={styles.offerTag}>
                <span className={styles.tagDot}></span>
                SPECIAL OFFER
              </div>
              <p className={styles.offerEligible}>YOU&rsquo;RE ELIGIBLE FOR</p>
              <h2 className={styles.offerDiscount}>30% OFF</h2>
              <div className={styles.offerDivider}></div>
              <p className={styles.offerDescription}>Get 30% Offer For Every Services</p>
              <div className={styles.offerDivider}></div>
              <ul className={styles.bulletList}>
                <li>
                  <svg
                    className={styles.checkIcon}
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22 11.08V12a10 10 0 1 1-5.93-9.14M22 4L12 14.01l-3-3"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Free consultation call</span>
                </li>
                <li>
                  <svg
                    className={styles.checkIcon}
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22 11.08V12a10 10 0 1 1-5.93-9.14M22 4L12 14.01l-3-3"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Dedicated project manager</span>
                </li>
                <li>
                  <svg
                    className={styles.checkIcon}
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22 11.08V12a10 10 0 1 1-5.93-9.14M22 4L12 14.01l-3-3"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>NDA protected & secure</span>
                </li>
              </ul>
            </div>

            {/* Right Panel: Lead Capture Form */}
            <div className={styles.formPanel}>
              {/* Close Modal Button */}
              <button
                type="button"
                className={styles.closeModalBtn}
                onClick={closeBanner}
                aria-label="Close modal"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 6L6 18M6 6l12 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <h3 className={styles.formTitle}>
                Your <span className={styles.highlightText}>Details</span>
              </h3>
              <p className={styles.formSubtitle}>
                Fill in the form and our experts will reach out shortly.
              </p>

              <form onSubmit={handleSubmit} className={styles.leadForm}>
                {/* Row for Name and Email */}
                <div className={styles.formRow}>
                  <div className={styles.inputGroup}>
                    <label htmlFor="name" className={styles.inputLabel}>
                      FULL NAME
                    </label>
                    <div className={styles.inputWrapper}>
                      <svg
                        className={styles.inputIcon}
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        className={styles.formInput}
                      />
                    </div>
                  </div>

                  <div className={styles.inputGroup}>
                    <label htmlFor="email" className={styles.inputLabel}>
                      EMAIL
                    </label>
                    <div className={styles.inputWrapper}>
                      <svg
                        className={styles.inputIcon}
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M22 6l-10 7L2 6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        className={styles.formInput}
                      />
                    </div>
                  </div>
                </div>

                {/* Phone Number Field */}
                <div className={styles.inputGroupFull}>
                  <label htmlFor="phone" className={styles.inputLabel}>
                    PHONE NUMBER
                  </label>
                  <div className={styles.inputWrapper}>
                    <svg
                      className={styles.inputIcon}
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      placeholder="10-digit phone number"
                      value={formData.phone}
                      onChange={handleChange}
                      className={styles.formInput}
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div className={styles.inputGroupFull}>
                  <label htmlFor="message" className={styles.inputLabel}>
                    MESSAGE <span className={styles.optionalText}>(optional)</span>
                  </label>
                  <div className={styles.textareaWrapper}>
                    <svg
                      className={styles.textareaIcon}
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your requirement..."
                      value={formData.message}
                      onChange={handleChange}
                      className={styles.formTextarea}
                      rows={3}
                    />
                  </div>
                </div>

                {/* Honeypot hidden input */}
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    left: "-9999px",
                    opacity: 0,
                    height: 0,
                    overflow: "hidden",
                  }}
                >
                  <input
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData.website}
                    onChange={handleChange}
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className={styles.submitBtn}
                >
                  {status === "loading" ? (
                    "Sending..."
                  ) : (
                    <>
                      Talk To Our Experts
                      <svg
                        className={styles.btnArrow}
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5 12h14M12 5l7 7-7 7"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </>
                  )}
                </button>
              </form>

              {/* Status messages */}
              {status === "success" && (
                <div className={styles.successMessage}>{statusMsg}</div>
              )}
              {status === "error" && (
                <div className={styles.errorMessage}>{statusMsg}</div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
