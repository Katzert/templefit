import React, { useState, useRef, useEffect } from 'react';
import { cn } from './card';

interface InlineEditProps {
  value: string;
  onSave: (value: string) => void;
  multiline?: boolean;
  className?: string;
  placeholder?: string;
}

export function InlineEdit({ value, onSave, multiline = false, className, placeholder }: InlineEditProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [tempValue, setTempValue] = useState(value);
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

  useEffect(() => {
    setTempValue(value);
  }, [value]);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  const handleBlur = () => {
    setIsEditing(false);
    if (tempValue !== value) {
      onSave(tempValue);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !multiline) {
      handleBlur();
    }
    if (e.key === 'Escape') {
      setTempValue(value);
      setIsEditing(false);
    }
  };

  if (isEditing) {
    if (multiline) {
      return (
        <textarea
          ref={inputRef as React.RefObject<HTMLTextAreaElement>}
          value={tempValue}
          onChange={(e) => setTempValue(e.target.value)}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className={cn(
            "w-full bg-black/40 border border-temple-gold/50 rounded-lg p-2 text-white focus:outline-none focus:ring-1 focus:ring-temple-gold resize-none",
            className
          )}
          rows={3}
        />
      );
    }
    return (
      <input
        ref={inputRef as React.RefObject<HTMLInputElement>}
        type="text"
        value={tempValue}
        onChange={(e) => setTempValue(e.target.value)}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        className={cn(
          "w-full bg-black/40 border border-temple-gold/50 rounded-lg p-2 text-white focus:outline-none focus:ring-1 focus:ring-temple-gold",
          className
        )}
      />
    );
  }

  return (
    <div
      onClick={() => setIsEditing(true)}
      className={cn(
        "cursor-text hover:bg-white/5 rounded-lg p-2 transition-colors border border-transparent hover:border-white/10 min-h-[40px] whitespace-pre-wrap",
        !value && "text-gray-500 italic",
        className
      )}
    >
      {value || placeholder || "Haz clic para editar..."}
    </div>
  );
}
