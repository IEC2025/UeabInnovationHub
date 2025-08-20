import * as React from "react"
import { motion, HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/utils"
import { ButtonProps, buttonVariants } from "./button"

interface EnhancedButtonProps 
  extends Omit<HTMLMotionProps<"button">, "ref">,
    Omit<ButtonProps, "onClick" | "onMouseEnter" | "onMouseLeave"> {
  variant?: ButtonProps['variant']
  size?: ButtonProps['size']
  ripple?: boolean
  magnetic?: boolean
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const EnhancedButton = React.forwardRef<HTMLButtonElement, EnhancedButtonProps>(
  ({ 
    className, 
    variant, 
    size, 
    ripple = true, 
    magnetic = false,
    children,
    onClick,
    ...props 
  }, ref) => {
    const [ripples, setRipples] = React.useState<Array<{ x: number; y: number; id: number }>>([]);

    const createRipple = (event: React.MouseEvent<HTMLButtonElement>) => {
      if (!ripple) return;

      const button = event.currentTarget;
      const rect = button.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const id = Date.now();

      setRipples(prev => [...prev, { x, y, id }]);

      setTimeout(() => {
        setRipples(prev => prev.filter(ripple => ripple.id !== id));
      }, 600);
    };

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      createRipple(event);
      onClick?.(event);
    };

    return (
      <motion.button
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }), 'relative overflow-hidden')}
        whileHover={{ 
          scale: magnetic ? 1.05 : 1.02,
          boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
        }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        onClick={handleClick}
        {...props}
      >
        {children}
        
        {/* Ripple Effect */}
        {ripples.map(ripple => (
          <motion.span
            key={ripple.id}
            className="absolute rounded-full bg-white/30 pointer-events-none"
            style={{
              left: ripple.x - 150,
              top: ripple.y - 150,
            }}
            initial={{ width: 0, height: 0, opacity: 0.8 }}
            animate={{ width: 300, height: 300, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        ))}
      </motion.button>
    )
  }
)

EnhancedButton.displayName = "EnhancedButton"

export { EnhancedButton, type EnhancedButtonProps }