import { useSdk } from "../useSdk";

export const SdkTester = () => {
  const { zetaSDK } = useSdk();

  if (!zetaSDK) {
    return <p>LOADING</p>;
  }

  return <div>Assets: {zetaSDK.Asset.BTC}</div>;
};
