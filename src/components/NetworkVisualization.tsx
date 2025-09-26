const NetworkVisualization = () => {
  return (
    <div className="relative w-full h-full min-h-[500px] flex items-center justify-center">
      <svg 
        width="600" 
        height="500" 
        viewBox="0 0 600 500" 
        className="float-element max-w-full h-auto"
      >
        {/* Gradient Definitions */}
        <defs>
          <linearGradient id="nodeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(206, 100%, 50%)" />
            <stop offset="100%" stopColor="hsl(264, 77%, 58%)" />
          </linearGradient>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(206, 100%, 50%)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="hsl(264, 77%, 58%)" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        {/* Connection Lines */}
        <g className="connections">
          <line x1="150" y1="100" x2="250" y2="150" stroke="url(#lineGradient)" strokeWidth="2" className="flow-line" />
          <line x1="250" y1="150" x2="400" y2="120" stroke="url(#lineGradient)" strokeWidth="2" className="flow-line" style={{animationDelay: '0.5s'}} />
          <line x1="400" y1="120" x2="450" y2="250" stroke="url(#lineGradient)" strokeWidth="2" className="flow-line" style={{animationDelay: '1s'}} />
          <line x1="450" y1="250" x2="350" y2="300" stroke="url(#lineGradient)" strokeWidth="2" className="flow-line" style={{animationDelay: '1.5s'}} />
          <line x1="350" y1="300" x2="200" y2="280" stroke="url(#lineGradient)" strokeWidth="2" className="flow-line" style={{animationDelay: '2s'}} />
          <line x1="200" y1="280" x2="150" y2="200" stroke="url(#lineGradient)" strokeWidth="2" className="flow-line" style={{animationDelay: '2.5s'}} />
          <line x1="150" y1="200" x2="250" y2="150" stroke="url(#lineGradient)" strokeWidth="2" className="flow-line" style={{animationDelay: '3s'}} />
          
          {/* Additional connecting lines */}
          <line x1="300" y1="80" x2="400" y2="120" stroke="url(#lineGradient)" strokeWidth="1.5" className="flow-line" style={{animationDelay: '0.8s'}} />
          <line x1="180" y1="350" x2="350" y2="300" stroke="url(#lineGradient)" strokeWidth="1.5" className="flow-line" style={{animationDelay: '1.3s'}} />
          <line x1="500" y1="180" x2="450" y2="250" stroke="url(#lineGradient)" strokeWidth="1.5" className="flow-line" style={{animationDelay: '1.8s'}} />
        </g>

        {/* Network Nodes */}
        <g className="nodes">
          {/* Central Hub Node */}
          <circle cx="300" cy="200" r="12" fill="url(#nodeGradient)" className="pulse-node" />
          
          {/* Mentor Nodes */}
          <circle cx="150" cy="100" r="8" fill="hsl(206, 100%, 50%)" className="pulse-node" style={{animationDelay: '0.5s'}} />
          <circle cx="400" cy="120" r="10" fill="hsl(206, 100%, 50%)" className="pulse-node" style={{animationDelay: '1s'}} />
          <circle cx="500" cy="180" r="7" fill="hsl(206, 100%, 50%)" className="pulse-node" style={{animationDelay: '1.5s'}} />
          
          {/* Mentee Nodes */}
          <circle cx="200" cy="280" r="8" fill="hsl(264, 77%, 58%)" className="pulse-node" style={{animationDelay: '2s'}} />
          <circle cx="350" cy="300" r="9" fill="hsl(264, 77%, 58%)" className="pulse-node" style={{animationDelay: '2.5s'}} />
          <circle cx="180" cy="350" r="6" fill="hsl(264, 77%, 58%)" className="pulse-node" style={{animationDelay: '3s'}} />
          
          {/* Connection Points */}
          <circle cx="250" cy="150" r="6" fill="hsl(235, 88%, 65%)" className="pulse-node" style={{animationDelay: '0.3s'}} />
          <circle cx="450" cy="250" r="7" fill="hsl(235, 88%, 65%)" className="pulse-node" style={{animationDelay: '0.8s'}} />
          <circle cx="150" cy="200" r="5" fill="hsl(235, 88%, 65%)" className="pulse-node" style={{animationDelay: '1.3s'}} />
          <circle cx="300" cy="80" r="5" fill="hsl(235, 88%, 65%)" className="pulse-node" style={{animationDelay: '1.8s'}} />
        </g>

        {/* Innovation Symbols */}
        <g className="symbols">
          {/* Lightbulb Icon */}
          <g transform="translate(280, 180)">
            <path 
              d="M20 10 C20 4.5 15.5 0 10 0 C4.5 0 0 4.5 0 10 C0 13 1.5 15.5 4 17 L4 19 C4 20 5 21 6 21 L14 21 C15 21 16 20 16 19 L16 17 C18.5 15.5 20 13 20 10 Z M6 23 L14 23 M8 25 L12 25" 
              stroke="url(#nodeGradient)" 
              strokeWidth="1.5" 
              fill="none" 
              className="pulse-node"
              style={{animationDelay: '2.5s'}}
            />
          </g>

          {/* Connection Symbol */}
          <g transform="translate(440, 240)">
            <circle cx="0" cy="-5" r="3" fill="none" stroke="url(#nodeGradient)" strokeWidth="1.5" className="pulse-node" style={{animationDelay: '1.2s'}} />
            <circle cx="0" cy="5" r="3" fill="none" stroke="url(#nodeGradient)" strokeWidth="1.5" className="pulse-node" style={{animationDelay: '1.7s'}} />
            <line x1="0" y1="-2" x2="0" y2="2" stroke="url(#nodeGradient)" strokeWidth="1.5" />
          </g>
        </g>
      </svg>
    </div>
  );
};

export default NetworkVisualization;