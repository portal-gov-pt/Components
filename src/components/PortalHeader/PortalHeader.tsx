import React from "react";
import "@ama-pt/agora-design-system/dist/index.css";

export interface PortalHeaderProps {
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

const PortalHeader = (props: PortalHeaderProps) => {
  return <>{props.publicService}</>;
};

export default PortalHeader;
