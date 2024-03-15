import { DefaultFooterProps, FooterData, ImageData, LinkData, LogoData } from "./footerTypes";

const defaultFooterData : FooterData = {
  badgeImage: {
    image: {
      alt: "Selo de ouro de usabilidade e acessibilidade",
      src: "/acessibilidade.png"
    },
    link: {
      href: "https://selo.usabilidade.gov.pt/",
      target: "_blank",
      title: "Abre num novo separador",
    },
  },
  brandImage: {
    image: {
      alt: "Logótipo República Portuguesa",
      src: "/republica-portuguesa.png"
    },
    link: {
      href: "https://www.portugal.gov.pt/pt/gc22",
      target: "_blank",
      title: "Abre num novo separador",
    },
  },
  caption:
    "O ePortugal é financiado pelo Plano de Recuperação e Resiliência e o Next Generation EU.",
  card: {
    description:
      "Caso necessite de ajuda durante a realização do serviço, poderá utilizar qualquer um dos canais de comunicação à sua disposição e sempre que necessário esclareça todas as dúvidas ou partilhe uma sugestão.",
    links: [
      {
        children: "Enviar mensagem",
        href: "?path=/docs/documentation-welcome--page",
        target: "_self",
      },
      {
        children: "Ver contactos",
        href: "?path=/docs/documentation-welcome--page",
        target: "_self",
      },
      {
        children: "Ver locais de atendimento",
        href: "?path=/docs/documentation-welcome--page",
        target: "_self",
      },
    ],
    title: "Precisa de ajuda com este serviço?",
  },
  copyright: "© 2023 República Portuguesa. Todos os direitos reservados.",
  partnersLogos: [
    {
      image: {
        alt: "Logótipo PRR",
        src: "/prr.svg"
      },
      link: {
        href: "https://recuperarportugal.gov.pt/",
        target: "_blank",
        title: "Abre num novo separador",
      },
    },
    {
      image: {
        alt: "Logótipo República Portuguesa",
        src: "/republica-portuguesa.svg"
      },
      link: {
        href: "https://www.portugal.gov.pt/pt/gc22",
        target: "_blank",
        title: "Abre num novo separador",
      },
    },
    {
      image: {
        alt: "Logótipo Next Generation EU",
        src: "/europa.svg"
      },
      link: {
        href: 'https://ec.europa.eu/info/strategy/recovery-plan-europe_pt"',
        target: "_blank",
        title: "Abre num novo separador",
      },
    },
  ],
  socialsLink: [
    {
      icon: "agora-line-linkedin",
      iconHover: "agora-solid-linkedin",
      link: {
        href: "https://linkedin.com",
        target: "_blank",
        title: "Linkedin",
      }
    },
    {
      icon: "agora-line-facebook",
      iconHover: "agora-solid-facebook",
      link: {
        href: "https://facebook.com",
        target: "_blank",
        title: "Facebook",
      }
    },
    {
      icon: "agora-line-twitter-x",
      iconHover: "agora-solid-twitter-x",
      link: {
        href: "https://twitter.com",
        target: "_blank",
        title: "Twitter",
      }
    },
    {
      icon: "agora-line-instagram",
      iconHover: "agora-solid-instagram",
      link: {
        href: "https://recuperarportugal.gov.pt/",
        target: "_blank",
        title: "Instagram",
      }
    },
    {
      icon: "agora-line-youtube",
      iconHover: "agora-solid-youtube",
      link: {
        href: "https://recuperarportugal.gov.pt/",
        target: "_blank",
        title: "Youtube",
      }
    }
  ],
  usefulLinks: [
    {
      children: "Acessibilidade",
      href: "/acessibilidade",
      target: "_self",
    },
    {
      children: "Termos e Condições",
      href: "/termos-e-condicoes",
      target: "_self",
    },
    {
      children: "Política de Privacidade",
      href: "/politica-de-privacidade",
      target: "_self",
    },
    {
      children: "Definições de Cookies",
      href: "/cookies",
      target: "_self",
    }
  ]
};

const defaultFooterDataProps: DefaultFooterProps = {
  serviceType: 'federated',
  footerData: defaultFooterData
}

const setImageData = (image:ImageData, path:string) => {
  image.src = `${path}${image.src}`;
};

const setLinkData = (link:LinkData, target:string) => {
  link.target = target;
};

const setLogoData = (logo:LogoData, location:string, target:string) => {
  setImageData(logo.image, location);
  setLinkData(logo.link, target);
};

const getFooterData = ( footerData:FooterData, path:string):FooterData => {
  setLogoData(footerData.badgeImage, path, "_blank");
  setLogoData(footerData.brandImage, path, "_blank");
  footerData.card.links.forEach(link => setLinkData(link, "_self"));
  footerData.partnersLogos.forEach(logo => setLogoData(logo, path, "_blank"));
  footerData.socialsLink.forEach(social => setLinkData(social.link, "_blank"));
  footerData.usefulLinks.forEach(link => setLinkData(link, "_self"));
  return footerData;
}

export { getFooterData, defaultFooterData, defaultFooterDataProps };
