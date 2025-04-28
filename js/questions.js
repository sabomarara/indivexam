const questions = [
    {
      question: "What is the fundamental purpose of a communications system?",
      options: [
        "A. To generate data",
        "B. To transmit electromagnetic signals",
        "C. To exchange data between two parties",
        "D. To transform and encode information"
      ],
      answer: "C. To exchange data between two parties"
    },
    {
      question: "Which device generates the data to be transmitted?",
      options: ["A. Transmitter", "B. Receiver", "C. Source", "D. Destination"],
      answer: "C. Source"
    },
    {
      question: "What does the transmitter do?",
      options: [
        "A. Accepts the signal",
        "B. Converts the signal into a form that can be handled by the destination device",
        "C. Generates the data",
        "D. Transforms and encodes the information into electromagnetic signals"
      ],
      answer: "D. Transforms and encodes the information into electromagnetic signals"
    },
    {
      question: "What is a transmission system?",
      options: [
        "A. A device that generates data",
        "B. A device that accepts the signal",
        "C. A single transmission line or a complex network connecting source and destination",
        "D. A device that transforms and encodes information"
      ],
      answer: "C. A single transmission line or a complex network connecting source and destination"
    },
    {
      question: "What does the receiver do?",
      options: [
        "A. Generates the data",
        "B. Transforms and encodes the information",
        "C. Accepts the signal from the transmission system and converts it into a form that can be handled by the destination device",
        "D. Takes the incoming data from the receiver"
      ],
      answer: "C. Accepts the signal from the transmission system and converts it into a form that can be handled by the destination device"
    },
    {
      question: "What does the destination do?",
      options: [
        "A. Generates the data",
        "B. Takes the incoming data from the receiver",
        "C. Transforms and encodes the information",
        "D. Accepts the signal from the transmission system"
      ],
      answer: "B. Takes the incoming data from the receiver"
    },
    {
      question: "In a data transmission system, what is the transmission medium?",
      options: [
        "A. The device that generates the data",
        "B. The physical path between transmitter and receiver",
        "C. The device that transforms and encodes the information",
        "D. The device that accepts the signal"
      ],
      answer: "B. The physical path between transmitter and receiver"
    },
    {
      question: "Which of the following is an example of guided media?",
      options: [
        "A. Atmosphere",
        "B. Outer space",
        "C. Copper twisted pair",
        "D. Water"
      ],
      answer: "C. Copper twisted pair"
    },
    {
      question: "Which of the following is an example of unguided media?",
      options: [
        "A. Copper coaxial cable",
        "B. Optical fiber",
        "C. Copper twisted pair",
        "D. Atmosphere"
      ],
      answer: "D. Atmosphere"
    },
    {
      question: "What determines the characteristics and quality of a data transmission?",
      options: [
        "A. Only the characteristics of the medium",
        "B. Only the characteristics of the signal",
        "C. Both the characteristics of the medium and the characteristics of the signal",
        "D. None of the above"
      ],
      answer: "C. Both the characteristics of the medium and the characteristics of the signal"
    },
    {
      question: "For guided media, what is more important in determining the limitations of transmission?",
      options: [
        "A. The bandwidth of the signal",
        "B. The medium itself",
        "C. The transmitting antenna",
        "D. The receiving antenna"
      ],
      answer: "B. The medium itself"
    },
    {
      question: "For unguided media, what is more important in determining transmission characteristics?",
      options: [
        "A. The medium",
        "B. The bandwidth of the signal produced by the transmitting antenna",
        "C. The receiving antenna",
        "D. None of the above"
      ],
      answer: "B. The bandwidth of the signal produced by the transmitting antenna"
    },
    {
      question: "What is a key property of signals transmitted by antenna?",
      options: [
        "A. Bandwidth",
        "B. Directionality",
        "C. Interference",
        "D. Attenuation"
      ],
      answer: "B. Directionality"
    },
    {
      question: "Signals at lower frequencies are generally:",
      options: [
        "A. Directional",
        "B. Omnidirectional",
        "C. Focused into a beam",
        "D. High bandwidth"
      ],
      answer: "B. Omnidirectional"
    },
    {
      question: "At higher frequencies, signals can be:",
      options: [
        "A. Omnidirectional",
        "B. Low bandwidth",
        "C. Focused into a directional beam",
        "D. Subject to less interference"
      ],
      answer: "C. Focused into a directional beam"
    },
    {
      question: "Which of the following factors determine data rate and distance in data transmission systems?",
      options: [
        "A. Bandwidth",
        "B. Transmission impairments",
        "C. Interference",
        "D. All of the above"
      ],
      answer: "D. All of the above"
    },
    {
      question: "All other factors remaining constant, what is the relationship between bandwidth and data rate?",
      options: [
        "A. The greater the bandwidth, the lower the data rate",
        "B. The greater the bandwidth, the higher the data rate",
        "C. Bandwidth does not affect data rate",
        "D. The relationship is unpredictable"
      ],
      answer: "B. The greater the bandwidth, the higher the data rate"
    },
    {
      question: "Which type of guided media generally suffers more impairment?",
      options: [
        "A. Optical fiber",
        "B. Coaxial cable",
        "C. Twisted pair",
        "D. All suffer equally"
      ],
      answer: "C. Twisted pair"
    },
    {
      question: "What can cause interference in unguided media?",
      options: [
        "A. Emanations from nearby cables",
        "B. Competing signals in overlapping frequency bands",
        "C. Bundled cables",
        "D. Shielding"
      ],
      answer: "B. Competing signals in overlapping frequency bands"
    },
    {
      question: "How can interference be minimized in guided media?",
      options: [
        "A. By using unguided transmissions",
        "B. By bundling cables together",
        "C. By proper shielding",
        "D. By increasing the number of receivers"
      ],
      answer: "C. By proper shielding"
    },
    {
      question: "What happens when a guided medium is used to construct a shared link with multiple attachments?",
      options: [
        "A. Data rate increases",
        "B. Distance increases",
        "C. Each attachment introduces some attenuation and distortion",
        "D. Interference is reduced"
      ],
      answer: "C. Each attachment introduces some attenuation and distortion"
    },
    {
      question: "What is another name for guided media?",
      options: ["A. Wireless media", "B. Bounded media", "C. Unguided media", "D. Free space"],
      answer: "B. Bounded media"
    },
    {
      question: "Which of the following is a type of guided media?",
      options: ["A. Radio waves", "B. Microwaves", "C. Twisted pair", "D. Infrared"],
      answer: "C. Twisted pair"
    },
    {
      question: "What is a twisted pair cable?",
      options: [
        "A. A cable that uses electrical signals for communication",
        "B. A cable that holds optical fibers coated in plastic",
        "C. A physical media made up of a pair of cables twisted with each other",
        "D. A cable with two conductors parallel to each other"
      ],
      answer: "C. A physical media made up of a pair of cables twisted with each other"
    },
    {
      question: "Compared to other transmission media, twisted pair cable is:",
      options: ["A. More expensive", "B. Cheaper", "C. Heavier", "D. More difficult to install"],
      answer: "B. Cheaper"
    },
    {
      question: "What is the frequency range for twisted pair cable?",
      options: ["A. 0 to 3.5 GHz", "B. 0 to 3.5 KHz", "C. 3 Khz to 1 Ghz", "D. 300 GHz to 400 THz"],
      answer: "B. 0 to 3.5 KHz"
    },
    {
      question: "How are the copper wires arranged in a twisted pair?",
      options: [
        "A. Parallel to each other",
        "B. In a regular spiral pattern",
        "C. Coaxially",
        "D. In a straight line"
      ],
      answer: "B. In a regular spiral pattern"
    },
    {
      question: "What are the two types of twisted pair cables?",
      options: [
        "A. Coaxial and Fiber Optic",
        "B. Radio waves and Microwaves",
        "C. Shielded and Unshielded",
        "D. Infrared and Terrestrial"
      ],
      answer: "C. Shielded and Unshielded"
    },
    {
      question: "Which of the following is a common example of coaxial cable usage?",
      options: ["A. Telephone wire", "B. TV wire", "C. Computer network cable", "D. Fiber optic cable"],
      answer: "B. TV wire"
    },
    {
      question: "Why is the cable named 'coaxial'?",
      options: [
        "A. Because it is twisted",
        "B. Because it uses fiber optics",
        "C. Because it contains two conductors parallel to each other",
        "D. Because it transmits radio waves"
      ],
      answer: "C. Because it contains two conductors parallel to each other"
    },
    {
      question: "How does the frequency of coaxial cable compare to twisted pair cable?",
      options: [
        "A. Lower frequency",
        "B. Higher frequency",
        "C. Same frequency",
        "D. Frequency depends on the application"
      ],
      answer: "B. Higher frequency"
    },
    {
      question: "What does a fiber optic cable use for communication?",
      options: [
        "A. Electrical signals",
        "B. Radio waves",
        "C. Optical fibers coated in plastic",
        "D. Microwaves"
      ],
      answer: "C. Optical fibers coated in plastic"
    },
    {
      question: "What are optical fibers used for in fiber optic cables?",
      options: [
        "A. To transmit electrical signals",
        "B. To send data by pulses of light",
        "C. To provide insulation",
        "D. To protect from heat and cold"
      ],
      answer: "B. To send data by pulses of light"
    },
    {
      question: "What does the plastic coating on fiber optic cables protect against?",
      options: [
        "A. Electrical signals",
        "B. Radio waves",
        "C. Heat, cold, and electromagnetic interference",
        "D. Physical damage only"
      ],
      answer: "C. Heat, cold, and electromagnetic interference"
    },
    {
      question: "Compared to copper wires, fiber optics provide:",
      options: [
        "A. Slower data transmission",
        "B. Faster data transmission",
        "C. The same data transmission speed",
        "D. Data transmission depends on distance"
      ],
      answer: "B. Faster data transmission"
    },
    {
      question: "What is unguided transmission?",
      options: [
        "A. Transmission using physical medium",
        "B. Transmission using copper wires",
        "C. Transmission that transmits electromagnetic waves without using any physical medium",
        "D. Transmission through fiber optic cables"
      ],
      answer: "C. Transmission that transmits electromagnetic waves without using any physical medium"
    },
    {
      question: "What is another name for unguided transmission?",
      options: [
        "A. Guided media",
        "B. Bounded media",
        "C. Wireless transmission",
        "D. Coaxial transmission"
      ],
      answer: "C. Wireless transmission"
    },
    {
      question: "In unguided media, what is the medium through which electromagnetic energy flows?",
      options: ["A. Copper wire", "B. Fiber optic cable", "C. Air", "D. Plastic"],
      answer: "C. Air"
    },
    {
      question: "What are the three categories of unguided transmission?",
      options: [
        "A. Twisted pair, coaxial cable, fiber optics",
        "B. Radio waves, microwaves, infrared",
        "C. Simplex, half-duplex, full-duplex",
        "D. FDM, WDM, TDM"
      ],
      answer: "B. Radio waves, microwaves, infrared"
    },
    {
      question: "What are radio waves?",
      options: [
        "A. Electromagnetic waves transmitted through fiber optic cables",
        "B. Electromagnetic waves transmitted in all directions of free space",
        "C. Electromagnetic waves used for short-range communication",
        "D. Electromagnetic waves with frequencies from 1GHz to 1000 GHz"
      ],
      answer: "B. Electromagnetic waves transmitted in all directions of free space"
    },
    {
      question: "What does 'omnidirectional' mean in the context of radio waves?",
      options: [
        "A. Signals are focused in one direction",
        "B. Signals are transmitted through a physical medium",
        "C. Signals are propagated in all directions",
        "D. Signals have high frequency"
      ],
      answer: "C. Signals are propagated in all directions"
    },
    {
      question: "What is the frequency range of radio waves?",
      options: ["A. 300 GHz to 400 THz", "B. 1 GHz to 1000 GHz", "C. 3 Khz to 1 Ghz", "D. Above 1000 GHz"],
      answer: "C. 3 Khz to 1 Ghz"
    },
    {
      question: "In radio waves, how are the sending and receiving antennas aligned?",
      options: [
        "A. They are aligned in a straight line",
        "B. They are precisely aligned",
        "C. They are not aligned",
        "D. Alignment is not a factor"
      ],
      answer: "C. They are not aligned"
    },
    {
      question: "Which of the following is an example of radio waves?",
      options: ["A. TV remote", "B. Satellite communication", "C. FM radio", "D. Cell phone data transfer"],
      answer: "C. FM radio"
    },
    {
   
      question: "What are the two types of microwaves?",
      options: [
        "A. Terrestrial and satellite",
        "B. Radio and infrared",
        "C. Low and high frequency",
        "D. Guided and unguided"
      ],
      answer: "A. Terrestrial and satellite"
    },
    {
      question: "What is the frequency range of microwaves?",
      options: ["A. 3 Khz to 1 Ghz", "B. 300 GHz to 400 THz", "C. 1 GHz to 1000 GHz", "D. Above 1000 GHz"],
      answer: "C. 1 GHz to 1000 GHz"
    },
    {
      question: "How are microwaves transmitted in terrestrial microwave transmission?",
      options: [
        "A. Omnidirectionally",
        "B. Through cables",
        "C. Through optical fibers",
        "D. Via line-of-sight transmission"
      ],
      answer: "D."},

 
    {
      question: "What is the typical frequency range for satellite microwave transmission?",
      options: ["A. 2 to 4 GHz", "B. 1 to 2 GHz", "C. 30 to 300 MHz", "D. 1 to 40 GHz"],
      answer: "D. 1 to 40 GHz"
    },
    {
      question: "Why are higher frequencies used for satellite communication?",
      options: [
        "A. To avoid atmospheric absorption",
        "B. To achieve omnidirectional transmission",
        "C. To reduce interference from terrestrial microwaves",
        "D. To use smaller antennas"
      ],
      answer: "A. To avoid atmospheric absorption"
    },
    {
      question: "What is the primary application of infrared?",
      options: [
        "A. Long-distance communication",
        "B. Short-range communication",
        "C. Satellite communication",
        "D. Radio broadcasting"
      ],
      answer: "B. Short-range communication"
    },
    {
      question: "Can infrared pass through walls?",
      options: ["A. Yes", "B. No", "C. Sometimes", "D. It depends on the frequency"],
      answer: "B. No"
    },
    {
      question: "Which of the following is an example of infrared technology?",
      options: ["A. FM radio", "B. Satellite TV", "C. TV remote", "D. Microwave oven"],
      answer: "C. TV remote"
    },
    {
      question: "What is simplex transmission?",
      options: [
        "A. Data exchange in both directions simultaneously",
        "B. Data exchange in both directions, but only one at a time",
        "C. Data transmission in one direction only",
        "D. Data transmission with error correction"
      ],
      answer: "C. Data transmission in one direction only"
    },
    {
      question: "Which of the following is an example of simplex transmission?",
      options: ["A. Telephone conversation", "B. Walking", "C. Television broadcasting", "D. Internet browsing"],
      answer: "C. Television broadcasting"
    },
    {
      question: "What is half-duplex transmission?",
      options: [
        "A. Data transmission in one direction only",
        "B. Data exchange in both directions simultaneously",
        "C. Data exchange in both directions, but only one at a time",
        "D. Data transmission with acknowledgment"
      ],
      answer: "C. Data exchange in both directions, but only one at a time"
    },
    {
      question: "Which of the following is an example of half-duplex transmission?",
      options: ["A. Telephone conversation", "B. Walking", "C. Two-way radio", "D. Television broadcasting"],
      answer: "C. Two-way radio"
    },
    {
      question: "What is full-duplex transmission?",
      options: [
        "A. Data transmission in one direction only",
        "B. Data exchange in both directions simultaneously",
        "C. Data exchange in both directions, but only one at a time",
        "D. Data transmission with flow control"
      ],
      answer: "B. Data exchange in both directions simultaneously"
    },
    {
      question: "Which of the following is an example of full-duplex transmission?",
      options: ["A. Walking", "B. Internet browsing", "C. Two-way radio", "D. Television broadcasting"],
      answer: "B. Internet browsing"
    },
    {
      question: "What is a network?",
      options: [
        "A. A single device",
        "B. A collection of interconnected devices",
        "C. A transmission medium",
        "D. A communication protocol"
      ],
      answer: "B. A collection of interconnected devices"
    },
    {
      question: "What is the primary goal of a network?",
      options: [
        "A. To isolate devices",
        "B. To provide communication between devices",
        "C. To generate data",
        "D. To transmit signals"
      ],
      answer: "B. To provide communication between devices"
    },
    {
      question: "What are the three criteria necessary for an effective and efficient network?",
      options: [
        "A. Performance, reliability, security",
        "B. Speed, cost, size",
        "C. Simplicity, flexibility, scalability",
        "D. Topology, protocol, medium"
      ],
      answer: "A. Performance, reliability, security"
    },
    {
      question: "What does 'performance' refer to in the context of network criteria?",
      options: [
        "A. The ability to recover from failures",
        "B. The level of protection against unauthorized access",
        "C. The speed and efficiency of data transfer",
        "D. The physical arrangement of the network"
      ],
      answer: "C. The speed and efficiency of data transfer"
    },
    {
      question: "Which of the following metrics is used to evaluate network performance?",
      options: [
        "A. Reliability",
        "B. Security",
        "C. Throughput",
        "D. Topology"
      ],
      answer: "C. Throughput"
    },
    {
      question: "What is 'throughput'?",
      options: [
        "A. The frequency of failures",
        "B. The amount of data that can pass through the network in a given period of time",
        "C. The time it takes for a message to travel from one device to another",
        "D. The number of unauthorized access attempts"
      ],
      answer: "B. The amount of data that can pass through the network in a given period of time"
    },
    {
      question: "What is 'delay' in network performance?",
      options: [
        "A. The amount of data transmitted per unit of time",
        "B. The time it takes for a message to travel from one device to another",
        "C. The frequency of network failures",
        "D. The level of data encryption"
      ],
      answer: "B. The time it takes for a message to travel from one device to another"
    },
    {
      question: "What is 'reliability' in network criteria?",
      options: [
        "A. The speed of data transfer",
        "B. The protection against unauthorized access",
        "C. The ability to recover from failures",
        "D. The physical arrangement of the network"
      ],
      answer: "C. The ability to recover from failures"
    },
    {
      question: "Which of the following is a measure of network reliability?",
      options: [
        "A. Delay",
        "B. Throughput",
        "C. Frequency of failures",
        "D. Bandwidth"
      ],
      answer: "C. Frequency of failures"
    },
    {
      question: "What is 'security' in network criteria?",
      options: [
        "A. The speed of data transfer",
        "B. The ability to recover from failures",
        "C. The physical arrangement of the network",
        "D. The level of protection against unauthorized access"
      ],
      answer: "D. The level of protection against unauthorized access"
    },
    {
      question: "Which of the following is a network security challenge?",
      options: [
        "A. High throughput",
        "B. Low delay",
        "C. Unauthorized access",
        "D. High reliability"
      ],
      answer: "C. Unauthorized access"
    },
    {
      question: "What is 'topology' in a network?",
      options: [
        "A. The speed of data transfer",
        "B. The physical arrangement of network elements",
        "C. The set of rules governing data communication",
        "D. The type of transmission medium used"
      ],
      answer: "B. The physical arrangement of network elements"
    },
    {
      question: "Which of the following is a common network topology?",
      options: ["A. Protocol", "B. Medium", "C. Star", "D. Bandwidth"],
      answer: "C. Star"
    },
    {
      question: "What is a 'protocol' in networking?",
      options: [
        "A. The physical arrangement of network elements",
        "B. The speed of data transfer",
        "C. The set of rules governing data communication",
        "D. The transmission medium used"
      ],
      answer: "C. The set of rules governing data communication"
    },
    {
      question: "Which of the following is an example of a network protocol?",
      options: ["A. Star", "B. Coaxial cable", "C. TCP/IP", "D. Throughput"],
      answer: "C. TCP/IP"
    },
    {
      question: "What is 'mode of communication' in networking?",
      options: [
        "A. The physical arrangement of network elements",
        "B. The speed of data transfer",
        "C. The way data is transmitted between two devices",
        "D. The set of rules governing data communication"
      ],
      answer: "C. The way data is transmitted between two devices"
    },
    {
      question: "Which of the following is a mode of communication?",
      options: ["A. Star", "B. Simplex", "C. TCP/IP", "D. Coaxial cable"],
      answer: "B. Simplex"
    },
    {
      question: "What is a 'node' in a network?",
      options: [
        "A. A connection between two devices",
        "B. Any device capable of communication",
        "C. The speed of data transfer",
        "D. A set of rules governing data communication"
      ],
      answer: "B. Any device capable of communication"
    },
    {
      question: "Which of the following can be considered a node in a network?",
      options: ["A. Cable", "B. Router", "C. Protocol", "D. Topology"],
      answer: "B. Router"
    },
    {
      question: "What is a 'link' in a network?",
      options: [
        "A. A device capable of communication",
        "B. The speed of data transfer",
        "C. A connection between two nodes",
        "D. A set of rules governing data communication"
      ],
      answer: "C. A connection between two nodes"
    },
    {
      question: "Which of the following is an example of a link in a network?",
      options: ["A. Router", "B. Cable", "C. Protocol", "D. Topology"],
      answer: "B. Cable"
    },
    {
      question: "What is 'distributed processing'?",
      options: [
        "A. Processing that occurs in a single device",
        "B. Processing that is divided among multiple devices",
        "C. Data transmission over long distances",
        "D. Data reception from multiple sources"
      ],
      answer: "B. Processing that is divided among multiple devices"
    },
    {
      question: "What is a key advantage of distributed processing?",
      options: [
        "A. Increased complexity",
        "B. Higher cost",
        "C. Resource sharing",
        "D. Centralized control"
      ],
      answer: "C. Resource sharing"
    },
    {
      question: "What is a 'network criteria'?",
      options: [
        "A. A device capable of communication",
        "B. A connection between two nodes",
        "C. A set of rules governing data communication",
        "D. Factors that affect the performance and effectiveness of a network"
      ],
      answer: "D. Factors that affect the performance and effectiveness of a network"
    },
    {
      question: "Which of the following is a network criteria?",
      options: ["A. Topology", "B. Protocol", "C. Security", "D. Node"],
      answer: "C. Security"
    },
    {
      question: "What is the OSI model?",
      options: [
        "A. A hardware configuration for networks",
        "B. A set of protocols for data transmission",
        "C. A conceptual framework for network communication",
        "D. A type of network topology"
      ],
      answer: "C. A conceptual framework for network communication"
    },
    {
      question: "How many layers are in the OSI model?",
      options: ["A. 5", "B. 6", "C. 7", "D. 8"],
      answer: "C. 7"
    },
    {
      question: "What is the purpose of the OSI model?",
      options: [
        "A. To define network hardware",
        "B. To provide a standard for communication between different systems",
        "C. To control network traffic",
        "D. To encrypt data"
      ],
      answer: "B. To provide a standard for communication between different systems"
    },
    {
      question: "Which layer is the lowest layer in the OSI model?",
      options: [
        "A. Application layer",
        "B. Transport layer",
        "C. Physical layer",
        "D. Data link layer"
      ],
      answer: "C. Physical layer"
    },
    {
      question: "Which layer is responsible for transmitting bits over a physical medium?",
      options: [
        "A. Data link layer",
        "B. Network layer",
        "C. Transport layer",
        "D. Physical layer"
      ],
      answer: "D. Physical layer"
    },
    {
      question: "Which layer is responsible for error-free delivery of data?",
      options: [
        "A. Physical layer",
        "B. Network layer",
        "C. Data link layer",
        "D. Transport layer"
      ],
      answer: "C. Data link layer"
    },
    {
      question: "What is 'framing'?",
      options: [
        "A. The process of dividing data into packets at the network layer",
        "B. The process of converting data into electrical signals",
        "C. The process of dividing data into frames at the data link layer",
        "D. The process of establishing a connection between two devices"
      ],
      answer: "C. The process of dividing data into frames at the data link layer"
    },
    {
      question: "Which layer is responsible for logical addressing?",
      options: [
        "A. Data link layer",
        "B. Physical layer",
        "C. Network layer",
        "D. Transport layer"
      ],
      answer: "C. Network layer"
    },
    {
      question: "What is the primary function of the network layer?",
      options: [
        "A. Physical transmission of data",
        "B. Error control and flow control",
        "C. Routing packets across networks",
        "D. End-to-end delivery of data"
      ],
      answer: "C. Routing packets across networks"
    },
    {
      question: "Which layer is responsible for end-to-end delivery of data?",
      options: [
        "A. Network layer",
        "B. Data link layer",
        "C. Transport layer",
        "D. Physical layer"
      ],
      answer: "C. Transport layer"
    },
    {
      question: "What does TCP provide?",
      options: [
        "A. Unreliable, connectionless service",
        "B. Reliable, connection-oriented service",
        "C. Flow control only",
        "D. Congestion control only"
      ],
      answer: "B. Reliable, connection-oriented service"
    },
    {
      question: "What does UDP provide?",
      options: [
        "A. Reliable, connection-oriented service",
        "B. Unreliable, connectionless service",
        "C. Flow control",
        "D. Congestion control"
      ],
      answer: "B. Unreliable, connectionless service"
    },
    {
      question: "Which layer is responsible for providing services like email and file transfer?",
      options: [
        "A. Transport layer",
        "B. Network layer",
        "C. Data link layer",
        "D. Application layer"
      ],
      answer: "D. Application layer"
    },
    {
      question: "What is the purpose of service-point addressing or port address?",
      options: [
        "A. To identify a physical device on the network",
        "B. To identify a process within a computer",
        "C. To route packets across networks",
        "D. To ensure reliable data delivery"
      ],
      answer: "B. To identify a process within a computer"
    },
    {
      question: "What is segmentation and reassembly?",
      options: [
        "A. Dividing data into packets at the network layer",
        "B. Dividing data into segments",

        "C. Encapsulating data at the data link layer",
        "D. Compressing data at the application layer"
      ],
      answer: "B. Dividing data into segments "
    },
    {
      question: "Which layer is closest to the transmission medium?",
      options: [
        "A. Application layer",
        "B. Physical layer",
        "C. Transport layer",
        "D. Network layer"
      ],
      answer: "B. Physical layer"
    },
    {
      question: "Which layer is responsible for the overall flow of information from one end user to another?",
      options: [
        "A. Network layer",
        "B. Data link layer",
        "C. Transport layer",
        "D. Application layer"
      ],
      answer: "C. Transport layer"
    },
    {
      question: "What is the function of the application layer?",
      options: [
        "A. To provide physical connections between devices",
        "B. To route data packets across networks",
        "C. To provide services to the user",
        "D. To ensure reliable data delivery"
      ],
      answer: "C. To provide services to the user"
    },
    {
      question: "Which layer in the OSI model is responsible for establishing, managing, and terminating sessions?",
      options: [
        "A. Transport layer",
        "B. Session layer",
        "C. Presentation layer",
        "D. Application layer"
      ],
      answer: "B. Session layer"
    },
    {
      question: "Which layer is responsible for data format and encryption?",
      options: [
        "A. Application layer",
        "B. Session layer",
        "C. Presentation layer",
        "D. Transport layer"
      ],
      answer: "C. Presentation layer"
    },
    {
      question: "Which layer is responsible for the reliability of end-to-end delivery over either a circuit-switched or a packet-switched network?",
      options: [
        "A. Network layer",
        "B. Transport layer",
        "C. Session layer",
        "D. Data link layer"
      ],
      answer: "B. Transport layer"
    },
    {
      question: "Which layer is responsible for the reliable node-to-node delivery of data between two directly connected nodes?",
      options: [
        "A. Network layer",
        "B. Data link layer",
        "C. Physical layer",
        "D. Transport layer"
      ],
      answer: "B. Data link layer"
    },
    {
      question: "Which layer is responsible for moving individual bits from one node to the next?",
      options: [
        "A. Transport layer",
        "B. Data link layer",
        "C. Physical layer",
        "D. Network layer"
      ],
      answer: "C. Physical layer"
    },
    {
      question: "Which layer is responsible for the delivery of a message from one process to another?",
      options: [
        "A. Network layer",
        "B. Transport layer",
        "C. Session layer",
        "D. Application layer"
      ],
      answer: "D. Application layer"
    }
  
,
    {
        question: "You are the administrator of an active directory domain. A user complains to you that he is unable to change he password. No other users have this issue. What is the most likely cause of the problem?",
        options: [
            "Insufficient login credentials",
            "The property 'User cannot change password has been enabled when it was created",
            "He is a member of the Administrators group"
        ],
        answer: "The property 'User cannot change password has been enabled when it was created"
    },
    {
        question: "How does Al contribute to gaining insight into human intelligence?",
        options: [
            "By replicating human cognitive processes exactly",
            "By relying solely on predetermined rules and algorithms",
            "By analyzing large datasets to uncover patterns and correlations",
            "By disregarding the complexities of human cognition."
        ],
        answer: "By analyzing large datasets to uncover patterns and correlations"
    },
    {
        question: "If a problem can be broken into sub-problems that are reused several times, the problem possesses ___________ property.",
        options: [
            "Memoization",
            "Optimal substructure",
            "Greedy",
            "Overlapping sub-problems"
        ],
        answer: "Overlapping sub-problems"
    },
    {
        question: "In knowledge Representation (KR) how we do represent 'how to drive a car'?",
        options: [
            "Declarative knowledge",
            "Transition knowledge",
            "Procedural knowledge",
            "Information Knowledge"
        ],
        answer: "Procedural knowledge"
    },
    {
        question: "What is the difference between OLTP and OLAP databases?",
        options: [
            "OLTP databases store historical data, while OLAP databases store real-time data",
            "OLTP databases are optimized for read-heavy workloads, while OLAP databases are optimized for write heavy workloads",
            "OLTP databases are used for online transaction processing, while OLAP databases are used for online analytical processing.",
            "OLTP databases are used for online analytical processing, while OLAP databases are used for online transaction processing"
        ],
        answer: "OLTP databases are used for online transaction processing, while OLAP databases are used for online analytical processing."
    },
    {
        question: "Which ACID property ensures that a transaction either completes in its entirety or has no effect at all?",
        options: [
            "Atomicity",
            "Durability",
            "Consistency",
            "Isolation"
        ],
        answer: "Atomicity"
    },

    {
        question: "What is the primary objective of reinforcement learning in artificial intelligence?",
        options: [
            "To mimic human decision-making processes",
            "To categorize data into predefined classes or clusters",
            "To identify patterns and correlations in data",
            "To maximize cumulative reward through sequential decision-making"
        ],
        answer: "To maximize cumulative reward through sequential decision-making"
    },
    {
        question: "If an optimal solution can be created for a problem by constructing optimal solutions for its sub-problems, the problem possesses ___________ property.",
        options: [
            "Greedy",
            "Optimal substructure",
            "Memoization",
            "Overlapping sub-problems"
        ],
        answer: "Optimal substructure"
    },
    {
        question: "One of the following is not the main advantage of multiprogramming?",
        options: [
            "Copying one's programs or data; using system resources (CPU, memory, disk space, peripherals) without proper accounting.",
            "The CPU switches from program to program, running each for tens or hundreds of milliseconds. This provides economical interactive use of a system.",
            "Attempts to increase CPU utilization by always having something for the CPU to execute.",
            "Makes efficient use of the CPU by overlapping the demands for the CPU and its I/O devices from various users"
        ],
        answer: "Copying one's programs or data; using system resources (CPU, memory, disk space, peripherals) without proper accounting."
    },
    {
        question: "Which one of the following is not a method of an expression for algorithms?",
        options: [
            "Natural language",
            "Programming language",
            "Pseudo-code",
            "Flowchart"
        ],
        answer: "Programming language"
    },
    {
        question: "In a healthcare database system, which concept is crucial for ensuring patient data privacy and security?",
        options: [
            "Data Warehousing",
            "Data Mining",
            "Data Encryption",
            "Data Replication"
        ],
        answer: "Data Encryption"
    },
    {
        question: "What is a foreign key in a relational database?",
        options: [
            "A field in one table that refers to the primary key in another table",
            "A key used for accessing external data sources",
            "A key used for indexing primary keys",
            "A key used for encryption purposes"
        ],
        answer: "A field in one table that refers to the primary key in another table"
    },
    {
        question: "Which programming paradigm emphasizes breaking down problems into smaller, reusable components known as functions or procedures?",
        options: [
            "Procedural programming",
            "Imperative programming",
            "Object-oriented programming",
            "Functional programming"
        ],
        answer: "Procedural programming"
    },
    {
        question: "Which one of the following is a passive attack?",
        options: [
            "Masquerade",
            "DoS",
            "Traffic analysis",
            "Reply"
        ],
        answer: "Traffic analysis"
    },
    {
        question: "Which one of the following is not a step in merge sort algorithm?",
        options: [
            "Combine",
            "Conquer",
            "Divide",
            "Analyze"
        ],
        answer: "Analyze"
    },
    {
        question: "What does the term 'algorithm' refer to in the context of computer programming?",
        options: [
            "A set of rules or instructions for solving a problem",
            "A variable that holds a single piece of data",
            "A function that performs a specific task",
            "A programming language syntax"
        ],
        answer: "A set of rules or instructions for solving a problem"
    },
    {
        question: "Which objective of modern operating systems involves protecting the system and its resources from unauthorized access and malicious attacks?",
        options: [
            "Enhancing system performance",
            "Ensuring security and protection",
            "Maximizing hardware utilization",
            "Providing a user-friendly interface"
        ],
        answer: "Ensuring security and protection"
    },
    {
        question: "Which one is correct about RISC computers?",
        options: [
            "RISC are with few numbers of registers when compared to CISC",
            "RISC uses extensive addressing capabilities for memory operations",
            "RISC use complex and efficient machine instructions when compared to CISC",
            "RISC is with hardwired control unit with pipelining processing"
        ],
        answer: "RISC is with hardwired control unit with pipelining processing"
    },
    {
        question: "Which of the following is not a characteristic of NoSQL databases?",
        options: [
            "Flexibility in data models",
            "High availability",
            "Scalability",
            "Strict schema enforcement"
        ],
        answer: "Strict schema enforcement"
    },
    {
        question: "What is the name of a grammar in which all attributes of the grammar symbols are synthesized attributes and se form of inherited attributes?",
        options: [
            "M-attributed grammar",
            "L-attributed grammar",
            "C-attributed grammar",
            "S-attributed grammar"
        ],
        answer: "L-attributed grammar"
    },
    {
        question: "What is the minimum number of stacks required by a FSA?",
        options: [
            "1",
            "2",
            "3",
            "0"
        ],
        answer: "0"
    },
    {
        question: "What is the purpose of the switch statement in C++?",
        options: [
            "To declare and define functions",
            "To select one of many code blocks to be executed",
            "To execute a block of code repeatedly",
            "To define a loop that repeats until a condition is false"
        ],
        answer: "To select one of many code blocks to be executed"
    },
    {
        question: "Which of the following is Uninformed (Blind) Search?",
        options: [
            "Breadth-first search (BFS)",
            "Hill climbing",
            "Heuristic Functions",
            "Greedy search"
        ],
        answer: "Breadth-first search (BFS)"
    },
    {
        question: "Which among the following measures how strongly the elements within a module are related?",
        options: [
            "cohesion",
            "aggregation",
            "inheritance",
            "coupling"
        ],
        answer: "cohesion"
    },
    {
        question: "What is the term used to describe the collection of information stored in the database at a particular moment?",
        options: [
            "foreign key",
            "an instance",
            "primary key",
            "schema"
        ],
        answer: "an instance"
    },
    {
        question: "Which data structure allows deleting data elements from front and inserting at rear?",
        options: [
            "Binary search tree",
            "Deques",
            "Stacks",
            "Queues"
        ],
        answer: "Queues"
    },
    {
        question: "Which one of the following commands is used to test reachability of hosts?",
        options: [
            "Netstat",
            "Ping",
            "Traceroute",
            "Tcpdump"
        ],
        answer: "Ping"
    },
    {
        question: "Which of the following is true statement?",
        options: [
            "A module having low cohesion and high coupling is said to be functionally independent of other modules.",
            "A functionally dependent module has minimal interaction with other modules",
            "A module having high cohesion and low coupling is said to be functionally dependent of other modules",
            "Cohesion is a measure of functional strength of a module"
        ],
        answer: "Cohesion is a measure of functional strength of a module"
    },
    {
        question: "Which of the following is true statement?",
        options: [
            "A module having low cohesion and high coupling is said to be functionally independent of other modules.",
            "A functionally dependent module has minimal interaction with other modules",
            "A module having high cohesion and low coupling is said to be functionally dependent of other modules",
            "Cohesion is a measure of functional strength of a module"
        ],
        answer: "Cohesion is a measure of functional strength of a module"
    },
    {
        question: "Which class of grammar is used for syntax analysis?",
        options: [
            "Context free grammars",
            "Regular grammars",
            "Non-recursive grammars",
            "Recursive grammars"
        ],
        answer: "Context free grammars"
    },
    {
        question: "Which class of grammar is used for syntax analysis?",
        options: [
            "Context free grammars",
            "Regular grammars",
            "Non-recursive grammars",
            "Recursive grammars"
        ],
        answer: "Context free grammars"
    },
    {
        question: "Brute-force attacks are used most often against which types of access control?",
        options: [
            "Biometrics and smart cards",
            "Passwords and Smart Cards",
            "Passwords and Personal Identification Number",
            "Biometrics and Passwords"
        ],
        answer: "Passwords and Personal Identification Number"
    },
    {
        question: "One of the following describes the static structure of a system?",
        options: [
            "Sequence diagram",
            "Use case diagram",
            "Activity diagram",
            "Class diagram"
        ],
        answer: "Class diagram"
    },
    {
        question: "Which scheduling algorithm ensures that each process gets an equal share of the CPU time?",
        options: [
            "Round Robin (RR)",
            "First-Come, First-Served (FCFS)",
            "Shortest Job Next (SJN)",
            "Priority Scheduling"
        ],
        answer: "Round Robin (RR)"
    },
    {
        question: "The data structure required for breadth first traversal on a graph is:",
        options: [
            "Stack",
            "Tree",
            "Queue",
            "Array"
        ],
        answer: "Queue"
    },
    {
        question: "In PHP, which function initiates a session?",
        options: [
            "s_start()",
            "session_start()",
            "start()",
            "session_str()"
        ],
        answer: "session_start()"
    },
    {
        question: "A grammar has the following productions: A -> aA | b | ba Which one of the following string is in the language generated by the grammar?",
        options: [
            "bcbbbcabbchaa",
            "cacbcbbbbcabe",
            "abbocabbcbbbcbbaca"
        ],
        answer: "None of the strings match the productions based on the provided grammar."
    },
    {
        question: "Which one of the following places we cannot place our java script code?",
        options: [
            "In any tag as an attribute",
            "In the <body> tag",
            "In external files",
            "In the <head> tag"
        ],
        answer: "In any tag as an attribute"
    },
    {
        question: "Which one of the following is not a component of the computer system?",
        options: [
            "The data unit",
            "The input unit",
            "The control unit",
            "The storage unit"
        ],
        answer: "The data unit"
    },
    {
        question: "In signal communication, the absolute value of the highest intensity of the signal proportional to the energy it came is referred as",
        options: [
            "Pernod",
            "Frequency",
            "Attenuation",
            "Peak-amplitude"
        ],
        answer: "Peak-amplitude"
    },
    {
        question: "What is encapsulation in OOP?",
        options: [
            "Inheritance",
            "Composition",
            "Data hiding and abstraction",
            "Polymorphism"
        ],
        answer: "Data hiding and abstraction"
    },
    {
        question: "Which one of the following is a correct statement?",
        options: [
            "Turing machine is the least powerful automata",
            "Pushdown automata and FSA have the same power",
            "Regular expression is more powerful that FSA",
            "Deterministic FSA and Nondeterministic FSA are equivalent"
        ],
        answer: "Deterministic FSA and Nondeterministic FSA are equivalent"
    },
    {
        question: "Which one of the following statements is true?",
        options: [
            "The transport layer in OSI model is connection oriented and connectionless",
            "The transport layer in TCP/IP model is connection oriented only",
            "TCP/IP model has seven layers while OSi model has four.",
            "OSI model provides clear distinction between services, interfaces and protocols while TCP/IP model"
        ],
        answer: "The transport layer in OSI model is connection oriented and connectionless"
    },
    {
        question: "How does Al contribute to the study of human behavior and cognition?",
        options: [
            "By disregarding human behavior as irrelevant to Al research.",
            "By relying solely on philosophical theories of consciousness.",
            "By providing insights through analyzing vast amounts of behavioral data.",
            "By limiting its scope to deterministic algorithms."
        ],
        answer: "By providing insights through analyzing vast amounts of behavioral data."
    },
    {
        question: "Which backup strategy tries to backup only the modified files?",
        options: [
            "Full backup",
            "Partial backup",
            "Full dump",
            "Incremental backup"
        ],
        answer: "Incremental backup"
    },
    {
        question: "Which of the following is not Software Characteristics?",
        options: [
            "Maintenance is without spare part",
            "software is complex",
            "Software is manufactured",
            "Software is intangible"
        ],
        answer: "Maintenance is without spare part"
    },
    {
        question: "Which action of the bottom-up parsing moves terminals from input buffer to the stack?",
        options: [
            "Accept",
            "Shift",
            "Augment",
            "Reduce"
        ],
        answer: "Shift"
    },
    {
        question: "Is the process of arranging the elements of a particular data structure in some logical orde",
        options: [
            "Insertion",
            "Traversing",
            "Merging",
            "Sorting"
        ],
        answer: "Sorting"
    },



    {
        question: "Which of the following property of a graph represents the number of derivation steps needed to generate a string?",
        options: [
            "Path of a vertex from the root",
            "Degree of the vertex",
            "Parent vertex",
            "Root of the graph"
        ],
        answer: "Path of a vertex from the root"
    },
    {
        question: "Which one of the following is not used to determine the CPU state at the end of the execute cycle?",
        options: [
            "The content of the data bus",
            "The content of certain status conditions",
            "The content of all processor registers",
            "The content of the program counter"
        ],
        answer: "The content of the data bus"
    },
    {
        question: "Which one of the following is not a principle of system administration?",
        options: [
            "Request-based",
            "Automation",
            "Communication",
            "Simplicity"
        ],
        answer: "Request-based"
    }

];

