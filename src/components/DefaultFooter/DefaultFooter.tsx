import React from "react";
import { FooterData, DefaultFooterProps } from "./footerTypes";
import { FederatedFooter, PublicFooter } from "@ama-pt/agora-design-system";
import { defaultFooterDataProps } from "./defaultFooterData";
import "@ama-pt/agora-design-system/dist/index.css";

const DefaultFooter = (data?:DefaultFooterProps) => {
  let { serviceType, footerData } = data || defaultFooterDataProps;
  let isPublic = serviceType === 'public';
  let { badgeImage, brandImage, caption, card, copyright, partnersLogos, socialsLink, usefulLinks } : FooterData = footerData;

  //     {footerData && (isPublic ? <PublicFooter {...footerData} /> : <FederatedFooter {...footerData} />)}
  return (<>

    {footerData &&
      (isPublic ? (
        <PublicFooter
          badgeImage={badgeImage}
          brandImage={brandImage}
          caption={caption}
          card={card}
          copyright={copyright}
          partnersLogos={partnersLogos}
          socialsLink={socialsLink}
          usefulLinks={usefulLinks}
        />
      ) : (
        <FederatedFooter
          badgeImage={badgeImage}
          brandImage={brandImage}
          caption={caption}
          card={card}
          copyright={copyright}
          partnersLogos={partnersLogos}
          socialsLink={socialsLink}
          usefulLinks={usefulLinks}
        />
      ))}
    </>
  );
};

export default DefaultFooter;
