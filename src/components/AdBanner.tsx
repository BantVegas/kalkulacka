import { useEffect } from "react";

const AdBanner = () => {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {}
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block", width: "100%", minHeight: "120px", margin: "24px 0" }}
      data-ad-client="ca-pub-8005465650143173"
      data-ad-slot="TVOJE_SLOT_ID" // ← nahraď za svoje AdSense slot ID!
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
};

export default AdBanner;
