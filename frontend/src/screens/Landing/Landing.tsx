import {
  BookOpenIcon,
  MagnetIcon,
  MessageCircleIcon,
  PaletteIcon,
  PlusCircleIcon,
  RocketIcon,
  SlashIcon,
  StarIcon,
} from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

// Integration data
const integrations = [
  {
    id: 1,
    name: "LinkedIn",
    image: "/15eb37087d87de490283930b7ef4198d-low-res-linkedin.png",
    description:
      "Digibyte ankr hedera holo arweave revain. Quant livepeer PancakeSwap telcoin livepeer aave kusama hedera aave. Serum shiba-inu.",
  },
  {
    id: 2,
    name: "X (Twitter)",
    image: "/52bdc6b5d44eb5a0e54ccba1850d2bb1-low-res-x.png",
    description:
      "Audius golem polygon livepeer crypto ankr. Chainlink polygon aave bancor elrond digibyte secret maker USD. ECash crypto.",
  },
  {
    id: 3,
    name: "Instagram",
    image: "/adcda800652023fc154f14dab406a689-low-res-instagram.png",
    description:
      "Kava maker XRP elrond fantom velas ipsum litecoin. Helium helium bancor USD algorand EOS BitTorrent ipsum vechain. Kadena stellar.",
  },
  {
    id: 4,
    name: "SalesForce",
    image: "/88c0721a7bd1582b221731a922c1e490-xpslvk4yke.png",
    description:
      "Cardano monero stacks celo livepeer stellar kusama elrond stellar. Nexo livepeer bitcoin terraUSD elrond horizen ethereum stacks.",
  },
  {
    id: 5,
    name: "HubSpot",
    image: "/b72e031bef3b7644bc89396cd9e64ea1-low-res-hubspot.png",
    description:
      "PancakeSwap stellar dogecoin horizen celo solana. Serum digibyte THETA litecoin hedera dai filecoin shiba-inu. Velas velas klaytn EOS.",
  },
];

// Target audience data
const targetAudiences = [
  {
    id: 1,
    title: "Sales",
    icon: <MagnetIcon className="w-16 h-16" />,
    description:
      "Stellar arweave ipsum harmony ipsum livepeer stellar celo fantom. Klaytn digibyte avalanche celsius IOTA.",
  },
  {
    id: 2,
    title: "Recruiters",
    icon: (
      <div className="relative w-16 h-16">
        <img
          className="absolute w-[60px] h-12 top-2 left-0.5"
          alt="Group"
          src="/group.png"
        />
      </div>
    ),
    description: "Secret terra ipsum horizen XRP revain USD serum chainlink.",
  },
  {
    id: 3,
    title: "CEOs",
    icon: <RocketIcon className="w-16 h-16" />,
    description:
      "Loopring secret holo binance polkadot decentraland gala fantom kava cardano.",
  },
  {
    id: 4,
    title: "Freelancers",
    icon: <PaletteIcon className="w-16 h-16" />,
    description:
      "Monero filecoin dogecoin eCash shiba-inu velas golem WAX kusama. Litecoin shiba-inu aave terra revain ipsum.",
  },
];

export const Landing = (): JSX.Element => {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white w-full max-w-[1920px] relative">
        {/* Hero Section */}
        <header className="relative w-full max-w-[1600px] mx-auto px-6 lg:px-20">
          <nav className="flex justify-between items-center py-10">
            <div className="flex items-center gap-2.5">
              <img
                className="w-8 h-8"
                alt="DM Deals logo"
                src="/ion-file-tray-full-outline.svg"
              />
              <div className="font-medium text-black text-2xl">DM Deals</div>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2.5">
                <StarIcon className="w-7 h-7" />
                <span className="font-medium text-[#0b0b0b] text-base leading-[25px]">
                  Features
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <BookOpenIcon className="w-7 h-7" />
                <span className="font-medium text-[#0b0b0b] text-base leading-[25px]">
                  Education
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageCircleIcon className="w-7 h-7" />
                <span className="font-medium text-[#0b0b0b] text-base leading-[25px]">
                  Pricing
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  className="border-[#ababab] font-medium text-[#0b0a0a] text-[15px]"
                >
                  Login
                </Button>
                <Button className="bg-[#0b0b0b] font-medium text-white text-[15px]">
                  Get started
                </Button>
              </div>
            </div>
          </nav>

          <div className="flex flex-col lg:flex-row gap-8 mt-8">
            <div className="w-full lg:w-[970px]">
              <h1 className="text-[#0b0a0a] text-4xl md:text-[67.5px] leading-tight md:leading-[84px] font-medium">
                Scale 1:1 DMs on LI,
                <br />X and IG. Close more deals syncing DMs to your CRM
              </h1>

              <p className="mt-8 text-[#898989] text-xl md:text-2xl leading-relaxed md:leading-[37.5px] max-w-[680px]">
                Generate more leads and meetings by relationship building in
                your Direct Messages. Close more effectively by pushing rich DM
                Conversation Data automatically to your CRM.
              </p>

              <Button className="mt-12 bg-[#0b0b0b] text-white text-xl flex items-center gap-2.5 px-6 py-4 rounded-md">
                <SlashIcon className="w-8 h-8" />
                Get started for free
              </Button>
            </div>

            <div className="w-full lg:w-[1155px]">
              <img
                className="w-full h-auto"
                alt="Social life illustration"
                src="/social-life-bro-1.png"
              />
            </div>
          </div>
        </header>

        {/* Integrations Section */}
        <section className="mt-32 max-w-[1600px] mx-auto px-6 lg:px-20">
          <h2 className="text-[#0b0a0a] text-3xl md:text-[45px] leading-tight md:leading-[56px] font-medium">
            DM Deals integrates with:
          </h2>

          <Button
            variant="outline"
            className="mt-6 flex items-center gap-2.5 px-6 py-4 border-[#ababab] rounded-md"
          >
            <PlusCircleIcon className="w-8 h-8" />
            <span className="font-medium text-[#0b0a0a] text-xl">
              Suggest a new integration
            </span>
          </Button>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
            {integrations.slice(0, 3).map((integration) => (
              <div key={integration.id} className="flex items-start gap-5">
                <img
                  className="w-16 h-16 object-cover"
                  alt={integration.name}
                  src={integration.image}
                />
                <div className="flex flex-col gap-2.5">
                  <h3 className="text-[#0b0b0b] text-2xl leading-[25px] font-medium">
                    {integration.name}
                  </h3>
                  <p className="text-[#898989] text-xl md:text-2xl leading-relaxed md:leading-[37.5px]">
                    {integration.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
            {integrations.slice(3).map((integration) => (
              <div key={integration.id} className="flex items-start gap-5">
                <img
                  className="w-16 h-16 object-cover"
                  alt={integration.name}
                  src={integration.image}
                />
                <div className="flex flex-col gap-2.5">
                  <h3 className="text-[#0b0b0b] text-2xl leading-[25px] font-medium">
                    {integration.name}
                  </h3>
                  <p className="text-[#898989] text-xl md:text-2xl leading-relaxed md:leading-[37.5px]">
                    {integration.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Target Audience Section */}
        <section className="mt-32 max-w-[1600px] mx-auto px-6 lg:px-20 mb-20">
          <h2 className="text-[#0b0a0a] text-3xl md:text-[45px] leading-tight md:leading-[56px] font-medium mb-12">
            DM Deals is built for:
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {targetAudiences.map((audience) => (
              <Card
                key={audience.id}
                className="border border-solid border-[#bebebe] rounded-3xl"
              >
                <CardContent className="p-10">
                  <div className="flex flex-col items-start justify-center gap-6">
                    <div className="flex flex-col items-start gap-4 w-full">
                      {audience.icon}
                      <h3 className="text-[#0b0b0b] text-2xl leading-[25px] font-medium">
                        {audience.title}
                      </h3>
                    </div>
                    <p className="text-[#898989] text-xl md:text-2xl leading-relaxed md:leading-[37.5px]">
                      {audience.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
