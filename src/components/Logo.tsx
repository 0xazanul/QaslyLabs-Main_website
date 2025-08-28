import Image from "next/image";

interface LogoProps {
  size?: number;
  className?: string;
  showText?: boolean;
  textSize?: "sm" | "md" | "lg" | "xl";
}

export default function Logo({ 
  size = 32, 
  className = "", 
  showText = true, 
  textSize = "lg" 
}: LogoProps) {
  const textSizeClasses = {
    sm: "text-sm",
    md: "text-base", 
    lg: "text-lg",
    xl: "text-xl"
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="flex items-center justify-center" style={{ width: size, height: size }}>
        <Image 
          src="/qasly-logo.svg" 
          alt="Qasly Labs" 
          width={size}
          height={size}
          className="w-full h-full"
        />
      </div>
      {showText && (
        <span className={`font-medium text-white tracking-tight ${textSizeClasses[textSize]}`}>
          Qasly Labs
        </span>
      )}
    </div>
  );
}
