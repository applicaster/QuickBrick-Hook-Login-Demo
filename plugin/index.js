import { MyLoginPluginComponent } from "./src";

const MyLoginPlugin = {
  presentFullScreen: true,
  isFlowBlocker: () => true,
  Component: MyLoginPluginComponent
};

export default MyLoginPlugin;
