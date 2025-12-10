
import React, { useState, useRef, useEffect } from 'react';

interface EditableTextProps {
  initialValue: string;
  onSave: (newValue: string) => void;
  // FIX: Changed type from `keyof JSX.IntrinsicElements` to `React.ElementType` to resolve an issue where the `JSX` namespace was not found, which caused compilation errors.
  tag?: React.ElementType;
  className?: string;
  inputClassName?: string;
}

export const EditableText: React.FC<EditableTextProps> = ({
  initialValue,
  onSave,
  tag: Tag = 'span',
  className = '',
  inputClassName = '',
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(initialValue);
  const inputRef = useRef<HTMLInputElement>(null);

  // Update internal state if initialValue prop changes from outside
  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);
  
  useEffect(() => {
    if (isEditing) {
      inputRef.current?.focus();
      inputRef.current?.select();
    }
  }, [isEditing]);

  const handleSave = () => {
    // Only save if the value has actually changed
    if (value.trim() !== initialValue.trim()) {
       onSave(value.trim());
    }
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSave();
    } else if (e.key === 'Escape') {
      setValue(initialValue);
      setIsEditing(false);
    }
  };

  const handleClick = () => {
      setIsEditing(true);
  }

  if (isEditing) {
    return (
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={handleSave}
        onKeyDown={handleKeyDown}
        className={`editable-input ${inputClassName}`}
        style={{ minWidth: '3ch' }} // Prevent input from collapsing when empty
      />
    );
  }

  return (
    <Tag
      onClick={handleClick}
      className={`${className} editable-text`}
      title="Нажмите, чтобы редактировать"
    >
      {initialValue}
    </Tag>
  );
};
