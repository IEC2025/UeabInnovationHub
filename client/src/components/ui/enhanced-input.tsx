import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface EnhancedInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
  animated?: boolean;
}

export const EnhancedInput = React.forwardRef<HTMLInputElement, EnhancedInputProps>(
  ({ className, label, error, icon, animated = true, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    const [hasValue, setHasValue] = useState(false);

    const handleFocus = () => setIsFocused(true);
    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      setHasValue(e.target.value.length > 0);
      props.onBlur?.(e);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setHasValue(e.target.value.length > 0);
      props.onChange?.(e);
    };

    if (!animated) {
      return (
        <div className="relative">
          {label && <label className="block text-sm font-medium mb-2">{label}</label>}
          <div className="relative">
            {icon && (
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                {icon}
              </div>
            )}
            <input
              ref={ref}
              className={cn(
                "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                icon && "pl-10",
                error && "border-red-500",
                className
              )}
              {...props}
            />
          </div>
          {error && (
            <p className="text-red-500 text-xs mt-1">{error}</p>
          )}
        </div>
      );
    }

    return (
      <motion.div 
        className="relative mb-6"
        initial={false}
        animate={{ 
          scale: isFocused ? 1.02 : 1 
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="relative">
          {icon && (
            <motion.div
              className="absolute left-3 top-1/2 transform -translate-y-1/2 z-10"
              animate={{
                color: isFocused ? '#3B82F6' : '#9CA3AF',
                scale: isFocused ? 1.1 : 1
              }}
              transition={{ duration: 0.2 }}
            >
              {icon}
            </motion.div>
          )}
          
          <motion.input
            ref={ref}
            className={cn(
              "flex h-12 w-full rounded-lg border-2 bg-background px-4 py-3 text-sm transition-all duration-200 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-transparent focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
              icon && "pl-12",
              error 
                ? "border-red-500 focus:border-red-500" 
                : "border-gray-200 focus:border-primary",
              className
            )}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
            animate={{
              boxShadow: isFocused 
                ? error 
                  ? "0 0 0 3px rgba(239, 68, 68, 0.1)" 
                  : "0 0 0 3px rgba(59, 130, 246, 0.1)"
                : "0 0 0 0px transparent"
            }}
            transition={{ duration: 0.2 }}
            {...props}
          />
          
          {label && (
            <motion.label
              className={cn(
                "absolute left-4 pointer-events-none transition-all duration-200 origin-left",
                icon && "left-12",
                error ? "text-red-500" : "text-gray-500"
              )}
              animate={{
                y: isFocused || hasValue ? -28 : -6,
                scale: isFocused || hasValue ? 0.85 : 1,
                color: isFocused 
                  ? error ? '#EF4444' : '#3B82F6'
                  : '#6B7280'
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {label}
            </motion.label>
          )}
        </div>
        
        {error && (
          <motion.p
            className="text-red-500 text-xs mt-2 ml-1"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {error}
          </motion.p>
        )}
        
        {/* Focus indicator line */}
        <motion.div
          className={cn(
            "absolute bottom-0 left-0 h-0.5 bg-primary",
            error && "bg-red-500"
          )}
          initial={{ width: "0%" }}
          animate={{ width: isFocused ? "100%" : "0%" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
      </motion.div>
    );
  }
);

EnhancedInput.displayName = "EnhancedInput";