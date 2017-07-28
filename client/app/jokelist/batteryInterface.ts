interface BatteryManager {
  charging: boolean;
  chargingTime: number;
  dischargingTime: number;
  level: number;
  onchargingchnge: () => any;
  onchargingtimechange: () => any;
  ondischargingtime: () => any;
  onlevelchange: () => any;
}

interface Navigator {
  battery: BatteryManager;
  mozBattery: BatteryManager;
  webkitBattery: BatteryManager;
}

const battery = (<any>navigator).battery || (<any>navigator).mozBattery ||(<any>navigator).webkitBattery;

if (!battery) {
  console.log('word')
} else {
  const charge = Math.floor(battery.level * 100) + '%';
  console.log(charge)
}
