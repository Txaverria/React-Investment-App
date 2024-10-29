export default function UserInput({ fieldsData, onInputChange }) {
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Convert value to a number
    const numericValue = Number(value);

    // Pass updated numeric values to parent component
    onInputChange({
      ...fieldsData,
      [name]: numericValue,
    });
  };

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initial-investment">Initial Investment</label>
          <input
            type="number"
            name="initialInvestment"
            value={fieldsData.initialInvestment}
            onChange={handleChange}
            required
          />
        </p>
        <p>
          <label htmlFor="annual-investment">Annual Investment</label>
          <input
            type="number"
            name="annualInvestment"
            value={fieldsData.annualInvestment}
            onChange={handleChange}
            required
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="return">Expected Return</label>
          <input
            type="number"
            name="expectedReturn"
            value={fieldsData.expectedReturn}
            onChange={handleChange}
            required
          />
        </p>
        <p>
          <label htmlFor="duration">Duration</label>
          <input
            type="number"
            name="duration"
            value={fieldsData.duration}
            onChange={handleChange}
            required
          />
        </p>
      </div>
    </section>
  );
}
