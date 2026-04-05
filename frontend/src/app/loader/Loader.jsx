import React from "react";
import "./Loader.css";

/**
 * A minimal, reusable loading spinner component.
 *
 * @param {Object} props
 * @param {string} [props.size="md"] - Size of the loader: "sm", "md", "lg"
 * @param {string} [props.color="blue"] - Color theme: "blue", "white", "gray"
 * @param {string} [props.text] - Optional text to display below the spinner
 * @param {boolean} [props.fullScreen=false] - Whether to cover the entire screen with a backdrop
 * @param {string} [props.className] - Additional CSS classes
 */
export default function Loader({
  size = "md",
  color = "blue",
  text,
  fullScreen = false,
  className = "",
}) {
  const sizeClasses = {
    sm: "w-6 h-6 border-2",
    md: "w-10 h-10 border-3",
    lg: "w-16 h-16 border-4",
  };

  const colorClasses = {
    blue: "border-blue-600 border-t-transparent",
    white: "border-white border-t-transparent",
    gray: "border-zinc-400 border-t-transparent",
  };

  const spinnerClass = `rounded-full animate-spin ${sizeClasses[size]} ${colorClasses[color]}`;

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-black/10 dark:bg-white/5 backdrop-blur-sm z-50 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className={spinnerClass} />
          {text && (
            <p className="text-zinc-700 dark:text-zinc-300 font-medium">
              {text}
            </p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div className={spinnerClass} />
      {text && (
        <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">{text}</p>
      )}
    </div>
  );
}
