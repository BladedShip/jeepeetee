import { BoltIcon, ExclamationTriangleIcon, SunIcon } from "@heroicons/react/24/outline";

function Home() {
  return (
    <div className="text-white flex flex-col items-center justify-center h-screen px-2">
      <h1 className="text-5xl font-bold mb-20">ChatJeePeeTee</h1>
      <div className="flex space-x-2 text-center">
        <div>
          <div className="flex flex-col items-center mb-5 justify-center">
            <SunIcon className="h-8 w-8"/>
            <h2>Examples</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">"Why are you gay?"</p>
            <p className="infoText">"Why am I henceforth unable to can?"</p>
            <p className="infoText">"To be or not to be, that is the questions. OR IS IT?"</p>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center mb-5 justify-center">
            <BoltIcon className="h-8 w-8"/>
            <h2>Capabilities</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">More GPT-3 Models to use</p>
            <p className="infoText">All your BS questions stored in Firebase</p>
            <p className="infoText">Ningal chodyam choichaa.. Naanu Bard-u Perplexity-u... </p>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center mb-5 justify-center">
            <ExclamationTriangleIcon className="h-8 w-8"/>
            <h2>Limitations</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">Most definitely will generate incorrect information</p>
            <p className="infoText">Will poduce harmful instructions and biased content</p>
            <p className="infoText">2021 kazhinj choicha njan parayoola. Kattis</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
