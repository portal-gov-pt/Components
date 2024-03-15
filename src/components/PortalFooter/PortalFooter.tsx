import React, { FC, useState, useEffect } from "react";
import { PortalFooterProps, DefaultFooterProps } from "../Footer/footerTypes";
import { getFooterData, defaultApiFooterData } from "../Footer/defaultFooterData";
import DefaultFooter from "../DefaultFooter";
import fetchData from '../fetchData';
import "@ama-pt/agora-design-system/dist/index.css";

const defaultUrl = 'http://localhost:5000/api/portal-unico/';  // buscar do .ENV;

const PortalFooter : FC<PortalFooterProps> = ({ publicService, language='pt', assetsPath='', url=defaultUrl }) => {

  const [apiFooterData, setApiFooterData] = useState<DefaultFooterProps>(defaultApiFooterData);

  useEffect(() => {
    const loadApiFooterData = async (url:string,publicService:string,language:string,assetsPath:string) => {
      const apiUrl = `${url}/${publicService}/${language}`;
      const data = await fetchData<DefaultFooterProps>(apiUrl);
      data.footerData = getFooterData(data.footerData,assetsPath);
      setApiFooterData(data);
    }

    loadApiFooterData(url,publicService,language,assetsPath);

  }, [language]);

  return (<DefaultFooter apiData={apiFooterData} />);
};

export default PortalFooter;
