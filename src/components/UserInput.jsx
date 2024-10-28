export default function UserInput() {
  return (
    <div id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initial-investment">Initial Investment</label>
          <input type="number" required />
        </p>
        <p>
          <label htmlFor="annual-investment">Annual Investment</label>
          <input type="number" required />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="return">Expected Return</label>
          <input type="number" required />
        </p>
        <p>
          <label htmlFor="duration">Duration</label>
          <input type="number" required />
        </p>
      </div>
    </div>
  );
}
