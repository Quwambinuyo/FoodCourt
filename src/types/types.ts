import React, { type ReactNode } from "react";

export interface ImageCarousel {
  id: number;
  imageSrc: string;
  name: string;
}

export interface FormProps {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  children: ReactNode;
  className?: string;
}

export interface FormInputProps {
  name: string;
  type?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  className?: string;
  children?: ReactNode;
}
