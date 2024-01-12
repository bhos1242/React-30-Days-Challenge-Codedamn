import { useState } from "react";
export default function Day16() {
  const [convertedValue, setConvertedValue] = useState("");
  const [formData, setFormData] = useState({
    from: "",
    to: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleConvert = async () => {
    try {
      const response = await fetch(
        `https://open.er-api.com/v6/latest/${formData.from}`
      );
      const data = await response.json();
      console.log(data.rates);

      if (data && data.rates && data.rates[formData.to]) {
        const rate = data.rates[formData.to];
        console.log(rate);
        const converted = formData.from * rate;
        setConvertedValue(converted.toFixed(2));
      } else {
        setConvertedValue("Invalid conversion");
      }
    } catch (error) {
      setConvertedValue("Conversion error");
    }
  };
  return (
    <>
      <div className="flex flex-col text-center">
        <div>
          <input
            type="text"
            name="from"
            value={formData.from}
            id="from"
            maxlength="3"
            onChange={handleInput}
            placeholder="From: e.g., USD"
            className="p-3 m-3 text-center bg-gray-300 rounded-md outline-none"
          />
        </div>
        <div>
          <span>To</span>
        </div>
        <div>
          <input
            type="text"
            id="to"
            name="to"
            maxlength="3"
            value={formData.to}
            placeholder="To: e.g., EUR"
            onChange={handleInput}
            className="p-3 m-3 text-center bg-gray-300 rounded-md outline-none"
          />
        </div>
        <div id="">
          <button
            id="convert"
            className="p-3 m-3 font-bold text-white bg-green-400 rounded-full hover:bg-green-500"
            onClick={handleConvert}
          >
            Convert
          </button>
        </div>
        <div id="currencyValue">{convertedValue}</div>
      </div>
    </>
  );
}
