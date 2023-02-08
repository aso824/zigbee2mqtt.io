"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[16067],{568031:(e,t,o)=>{o.r(t),o.d(t,{data:()=>i});const i=JSON.parse('{"key":"v-da1b6262","path":"/devices/ZHEMI101.html","title":"Develco ZHEMI101 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Develco ZHEMI101 control via MQTT","description":"Integrate your Develco ZHEMI101 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2021-02-28T13:58:01.000Z"},"excerpt":"","headers":[{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Power (numeric)","slug":"power-numeric","link":"#power-numeric","children":[]},{"level":3,"title":"Energy (numeric)","slug":"energy-numeric","link":"#energy-numeric","children":[]},{"level":3,"title":"Battery_low (binary)","slug":"battery-low-binary","link":"#battery-low-binary","children":[]},{"level":3,"title":"Pulse_configuration (numeric)","slug":"pulse-configuration-numeric","link":"#pulse-configuration-numeric","children":[]},{"level":3,"title":"Interface_mode (enum)","slug":"interface-mode-enum","link":"#interface-mode-enum","children":[]},{"level":3,"title":"Current_summation (numeric)","slug":"current-summation-numeric","link":"#current-summation-numeric","children":[]},{"level":3,"title":"Check_meter (binary)","slug":"check-meter-binary","link":"#check-meter-binary","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1675873743000},"filePathRelative":"devices/ZHEMI101.md"}')},598522:(e,t,o)=>{o.r(t),o.d(t,{default:()=>p});var i=o(166252);const a=(0,i._)("h1",{id:"develco-zhemi101",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#develco-zhemi101","aria-hidden":"true"},"#"),(0,i.Uk)(" Develco ZHEMI101")],-1),n=(0,i._)("thead",null,[(0,i._)("tr",null,[(0,i._)("th"),(0,i._)("th")])],-1),r=(0,i._)("tr",null,[(0,i._)("td",null,"Model"),(0,i._)("td",null,"ZHEMI101")],-1),c=(0,i._)("td",null,"Vendor",-1),d=(0,i._)("tr",null,[(0,i._)("td",null,"Description"),(0,i._)("td",null,"Energy meter")],-1),l=(0,i._)("tr",null,[(0,i._)("td",null,"Exposes"),(0,i._)("td",null,"power, energy, battery_low, pulse_configuration, interface_mode, current_summation, check_meter, linkquality")],-1),u=(0,i._)("tr",null,[(0,i._)("td",null,"Picture"),(0,i._)("td",null,[(0,i._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/ZHEMI101.jpg",alt:"Develco ZHEMI101"})])],-1),s=(0,i._)("h2",{id:"options",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,i.Uk)(" Options")],-1),h=(0,i.uE)('<ul><li><p><code>power_precision</code>: Number of digits after decimal point for power, takes into effect on next report of device. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>power_calibration</code>: Calibrates the power value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>energy_precision</code>: Number of digits after decimal point for energy, takes into effect on next report of device. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>energy_calibration</code>: Calibrates the energy value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="power-numeric" tabindex="-1"><a class="header-anchor" href="#power-numeric" aria-hidden="true">#</a> Power (numeric)</h3><p>Instantaneous measured power. Value can be found in the published state on the <code>power</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="energy-numeric" tabindex="-1"><a class="header-anchor" href="#energy-numeric" aria-hidden="true">#</a> Energy (numeric)</h3><p>Sum of consumed energy. Value can be found in the published state on the <code>energy</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>kWh</code>.</p><h3 id="battery-low-binary" tabindex="-1"><a class="header-anchor" href="#battery-low-binary" aria-hidden="true">#</a> Battery_low (binary)</h3><p>Indicates if the battery of this device is almost empty. Value can be found in the published state on the <code>battery_low</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> battery_low is ON, if <code>false</code> OFF.</p><h3 id="pulse-configuration-numeric" tabindex="-1"><a class="header-anchor" href="#pulse-configuration-numeric" aria-hidden="true">#</a> Pulse_configuration (numeric)</h3><p>Pulses per kwh. Default 1000 imp/kWh. Range 0 to 65535. Value can be found in the published state on the <code>pulse_configuration</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;pulse_configuration&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;pulse_configuration&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>65535</code>.</p><h3 id="interface-mode-enum" tabindex="-1"><a class="header-anchor" href="#interface-mode-enum" aria-hidden="true">#</a> Interface_mode (enum)</h3><p>Operating mode/probe. Value can be found in the published state on the <code>interface_mode</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;interface_mode&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;interface_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>electricity</code>, <code>gas</code>, <code>water</code>, <code>kamstrup-kmp</code>, <code>linky</code>, <code>IEC62056-21</code>, <code>DSMR-2.3</code>, <code>DSMR-4.0</code>.</p><h3 id="current-summation-numeric" tabindex="-1"><a class="header-anchor" href="#current-summation-numeric" aria-hidden="true">#</a> Current_summation (numeric)</h3><p>Current summation value sent to the display. e.g. 570 = 0,570 kWh. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;current_summation&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>268435455</code>.</p><h3 id="check-meter-binary" tabindex="-1"><a class="header-anchor" href="#check-meter-binary" aria-hidden="true">#</a> Check_meter (binary)</h3><p>Is true if communication problem with meter is experienced. Value can be found in the published state on the <code>check_meter</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> check_meter is ON, if <code>false</code> OFF.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',18),m={},p=(0,o(983744).Z)(m,[["render",function(e,t){const o=(0,i.up)("RouterLink");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.kq)(" !!!! "),(0,i.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,i.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,i.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,i.kq)(" !!!! "),a,(0,i._)("table",null,[n,(0,i._)("tbody",null,[r,(0,i._)("tr",null,[c,(0,i._)("td",null,[(0,i.Wm)(o,{to:"/supported-devices/#v=Develco"},{default:(0,i.w5)((()=>[(0,i.Uk)("Develco")])),_:1})])]),d,l,u])]),(0,i.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),(0,i.kq)(" Notes END: Do not edit below this line "),s,(0,i._)("p",null,[(0,i._)("em",null,[(0,i.Wm)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.w5)((()=>[(0,i.Uk)("How to use device type specific configuration")])),_:1})])]),h])}]])}}]);