import React from "react";
import "@ama-pt/agora-design-system/dist/index.css";

export interface DefaultHeaderProps {
  publicService:string,
  language?:string,
  assetsPath?:string,
  urlApi?:string
  onLanguageChanged?: () => void;
  onProfileChange?: () => void;
  onItemSelected?: () => void;
  onNotification?: () => void;
  onSearch?: () => [];
}

const DefaultHeader = (props: DefaultHeaderProps) => {
  return <>{props.publicService}</>;
};

export default DefaultHeader;
