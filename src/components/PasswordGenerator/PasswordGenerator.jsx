import { useState } from 'react';

function PasswordGenerator() {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(8);
  const [includeUpperCase, setIncludeUpperCase] = useState(true);
  const [includeLowerCase, setIncludeLowerCase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [isHovering, setIsHovering] = useState(false);

  const generatePassword = () => {
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()-_=+';

    let chars = '';
    if (includeUpperCase) chars += uppercaseChars;
    if (includeLowerCase) chars += lowercaseChars;
    if (includeNumbers) chars += numberChars;
    if (includeSymbols) chars += symbolChars;

    let newPassword = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      newPassword += chars[randomIndex];
    }

    setPassword(newPassword);
  };

  const copyPassword = () => {
    navigator.clipboard.writeText(password);
  };

  const generateButtonStyle = {
    marginTop: '5%',
    backgroundColor: isHovering ? 'green' : 'darkBlue',
    color: 'white',
    height: '10vh',
    width: '80vw',
    borderRadius: '10px',
    border: 'none',
    cursor: 'pointer',
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>Password Generator</h1>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ border: '2px solid black', width: '60vw', height: '20px', backgroundColor: 'rgb(248,248,248)', padding: '10px' }}>{password}</div>
        <button onClick={copyPassword} style={{ backgroundColor: 'green', color: 'white', height: '8vh', width: '8vw', borderRadius: '10px', border: 'none', marginLeft: '2%' }}>Copy Password</button>
      </div>

      <div style={{ display: 'flex', width: '90vw', justifyContent: 'space-between', marginTop: '3%' }}>
        <label>Select Password length <b>(8-50 characters)</b></label>
        <input
          type="number"
          value={length}
          onChange={(e) => {
            const value = parseInt(e.target.value);
            if (value >= 8 && value <= 50) {
              setLength(value);
            }
          }}
        />
      </div>

      <div style={{ marginTop: '8%' }}>
        <label>
          <input
            type="checkbox"
            checked={includeUpperCase}
            onChange={() => setIncludeUpperCase(!includeUpperCase)}
          />
          Include upper case
        </label>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            checked={includeLowerCase}
            onChange={() => setIncludeLowerCase(!includeLowerCase)}
          />
          Include lower case
        </label>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            checked={includeNumbers}
            onChange={() => setIncludeNumbers(!includeNumbers)}
          />
          Include numbers
        </label>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            checked={includeSymbols}
            onChange={() => setIncludeSymbols(!includeSymbols)}
          />
          Include symbols
        </label>
      </div>

      <button
        onClick={generatePassword}
        style={generateButtonStyle}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        Generate Password
      </button>

    </div>
  );
}

export default PasswordGenerator;
