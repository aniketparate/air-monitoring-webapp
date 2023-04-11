const Tab2 = () => {
  return (
    <div className="container">
      <div>
        <table>
          <tr>
            <th>CO Concentration (ppm)</th>
            <th>Effects</th>
            <th>Risk Level</th>
          </tr>
          <tr>
            <td>0-150</td>
            <td>Normal background levels</td>
            <td>Low level, considered safe</td>
          </tr>
          <tr>
            <td>151-300</td>
            <td>Mild headache, nausea, and dizziness</td>
            <td>Moderate level, can cause mild symptoms</td>
          </tr>
          <tr>
            <td>301-450</td>
            <td>
              Headache, nausea, and dizziness; can be life-threatening for those
              with heart disease
            </td>
            <td>
              High level, can cause symptoms and be life-threatening for some
            </td>
          </tr>
          <tr>
            <td>450 and above</td>
            <td>
              Headache, dizziness, and nausea within 1-2 hours; life-threatening
              after 2-3 hours of exposure
            </td>
            <td>
              Very high level, can cause symptoms and be life-threatening after
              2-3 hours
            </td>
          </tr>
        </table>
      </div>
      <div className="d-flex justify-content-around">
        <iframe
          title="CO"
          src="https://thingspeak.com/channels/2099500/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&title=CO&type=line"
          width={450}
          height={250}
        />
        <iframe
          title="CO"
          src="https://thingspeak.com/channels/2099500/widgets/628685"
          width={450}
          height={250}
        />
      </div>
      <div className="d-flex justify-content-around">
        <iframe
          title="Temperature"
          src="https://thingspeak.com/channels/2099500/charts/2?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&title=Temperature&type=line"
          width={450}
          height={250}
        />
        <iframe
          title="Temperature"
          src="https://thingspeak.com/channels/2099500/widgets/628692"
          width={450}
          height={250}
        />
      </div>
      <div className="d-flex justify-content-around">
        <iframe
          title="Humidity"
          src="https://thingspeak.com/channels/2099500/charts/3?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&title=Humidity&type=line"
          width={450}
          height={250}
        />
        <iframe
          title="Humidity"
          src="https://thingspeak.com/channels/2099500/widgets/628693"
          width={450}
          height={250}
        />
      </div>
      <div className="d-flex justify-content-around">
        <iframe
          title="Heat Index"
          src="https://thingspeak.com/channels/2099500/charts/4?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&title=Heat+Index&type=line"
          width={450}
          height={250}
        />
        <iframe
          title="Heat Index"
          src="https://thingspeak.com/channels/2099500/widgets/628694"
          width={450}
          height={250}
        />
      </div>
    </div>
  )
}

export default Tab2
