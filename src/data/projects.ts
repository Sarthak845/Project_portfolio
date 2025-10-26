import { Category } from '../types';

export const categories: Category[] = [
  {
    id: 'ev-systems',
    name: 'Electric Vehicles & EV Systems',
    description: 'EV powertrain, motor control, dashboard, and vehicle electronics',
    projects: [
      {
        id: 'bldc-powertrain',
        title: 'BLDC EV Powertrain System',
        description: 'Full BLDC powertrain including motor, controller, and dashboard for EVs.',
        skills: ['Motor Control', 'Power Electronics', 'Embedded Systems'],
        tags: ['Powertrain', 'BLDC', 'Control Systems']
      },
      {
        id: 'ev-dashboard',
        title: 'Multiple-Featured EV Dashboard',
        description: 'Displays speed, battery, motor parameters, and other EV telemetry in real-time.',
        skills: ['Embedded Programming', 'Display Interfacing', 'Communication Protocols'],
        tags: ['Dashboard', 'UI/UX', 'Real-time'],
        isAward: true
      },
      {
        id: 'pit-limiter',
        title: 'Pit Lane Limiter',
        description: 'Controls maximum vehicle speed in pit lane for safety during races.',
        skills: ['Embedded Control', 'Vehicle Electronics', 'Speed Regulation'],
        tags: ['Racing', 'Safety', 'Control'],
        isAward: true
      },
      {
        id: 'motor-tuning',
        title: 'Most Optimum Motor Tuning',
        description: 'Optimizes motor parameters for peak efficiency and performance.',
        skills: ['Motor Control Theory', 'Data Analysis', 'Power Electronics'],
        tags: ['Optimization', 'Performance', 'Analysis'],
        isAward: true
      },
      {
        id: 'pmsm-powertrain',
        title: 'PMSM Powertrain Design',
        description: 'Custom Permanent Magnet Synchronous Motor powertrain for a Racing EV Go-Kart.',
        skills: ['Powertrain Design', 'Simulation', 'Mechanical Integration'],
        tags: ['PMSM', 'Design', 'Racing']
      },
      {
        id: 'rtd-sound',
        title: 'Ready to Drive Sound for EVs',
        description: 'Generates sounds when the vehicle is ready to go for safety and compliance.',
        skills: ['Audio Signal Processing', 'EV Electronics', 'Embedded Programming'],
        tags: ['Safety', 'Audio', 'Compliance']
      },
      {
        id: 'rear-view',
        title: 'Rear View for Racing Vehicles',
        description: 'Provides a live rear-view feed for racing vehicles.',
        skills: ['Sensor Integration', 'Display Interfacing', 'Real-time Systems'],
        tags: ['Camera', 'Racing', 'Display']
      }
    ]
  },
  {
    id: 'electronics-power',
    name: 'Electronics & Power Systems',
    description: 'Battery design, voltage regulation, power electronics, and high-voltage systems',
    projects: [
      {
        id: 'battery-90ah',
        title: '72V 90Ah Battery',
        description: 'Custom high-performance battery pack for EVs with BMS integration.',
        skills: ['Battery Manufacturing', 'BMS', 'Power Electronics'],
        tags: ['Battery', 'BMS', 'Energy Storage']
      },
      {
        id: 'battery-72ah',
        title: '72V 72Ah Battery Designing',
        description: 'Custom design of a high-capacity battery pack for EVs.',
        skills: ['Battery Management', 'Safety Compliance', 'Circuit Analysis'],
        tags: ['Battery Design', 'BMS', 'Safety'],
        isAward: true
      },
      {
        id: 'voltage-regulator',
        title: 'Step-Down Voltage Regulator (220V AC → 12V DC)',
        description: 'Converts mains AC voltage to a safe 12V DC output.',
        skills: ['Power Electronics', 'Circuit Design', 'Transformer Theory'],
        tags: ['Power Supply', 'AC/DC', 'Regulation']
      },
      {
        id: 'tasor',
        title: 'Tasor (Stun Gun)',
        description: 'Produces high-voltage pulses for safety/self-defense applications.',
        skills: ['High-Voltage Electronics', 'Circuit Design', 'Safety'],
        tags: ['High Voltage', 'Safety', 'Electronics']
      },
      {
        id: 'battery-pack',
        title: '12V Battery Pack using Soldering Gun',
        description: 'Builds a functional 12V battery pack from individual cells.',
        skills: ['Soldering', 'Battery Design', 'Electrical Safety'],
        tags: ['Assembly', 'Battery', 'DIY']
      },
      {
        id: 'volume-indicator',
        title: 'Volume Indicator on LEDs using LM3914',
        description: 'Displays audio volume levels visually on a series of LEDs.',
        skills: ['Analog Electronics', 'IC Interfacing', 'Signal Visualization'],
        tags: ['LED', 'Audio', 'Visualization']
      },
      {
        id: 'led-blink',
        title: 'LED Blinking using 555 Timer IC',
        description: 'Uses a 555 timer to blink LEDs at set intervals.',
        skills: ['Analog Electronics', 'Timer Circuits', 'Embedded Logic'],
        tags: ['555 Timer', 'LED', 'Basics']
      }
    ]
  },
  {
    id: 'robotics',
    name: 'Robotics & Automation',
    description: 'Ground robots, robotic hands, obstacle avoidance, and sensor-based automation',
    projects: [
      {
        id: 'obstacle-4w',
        title: '4-Wheeled Obstacle Avoiding Robot',
        description: 'Automatically detects and navigates around obstacles using sensors.',
        skills: ['Sensor Integration', 'Algorithm Design', 'Autonomous Navigation'],
        tags: ['Autonomous', 'Navigation', 'Sensors']
      },
      {
        id: 'obstacle-2w',
        title: '2-Wheeled Obstacle Avoiding Robot',
        description: 'Balances on two wheels while detecting and avoiding obstacles.',
        skills: ['Control Algorithms', 'Embedded Programming', 'Mechanical Design'],
        tags: ['Balance', 'Navigation', 'Control']
      },
      {
        id: 'robotic-hand',
        title: 'Robotic Hand',
        description: 'Mimics human hand movements via servo motors and a DIY hand structure.',
        skills: ['Robotics', 'Actuator Control', 'Kinematics'],
        tags: ['Manipulation', 'Servo', 'Biomimetic']
      },
      {
        id: 'radar',
        title: 'Radar System',
        description: 'Detects object presence and distance using an ultrasonic sensor.',
        skills: ['Sensor Technology', 'Signal Processing', 'Embedded Programming'],
        tags: ['Ultrasonic', 'Detection', 'Ranging']
      },
      {
        id: 'solar-tracker',
        title: 'Automatic Solar Tracker using LDR and Servo Motor',
        description: 'Adjusts solar panel angle to maximize sunlight exposure automatically.',
        skills: ['Servo Control', 'Renewable Energy', 'Sensor Integration'],
        tags: ['Solar', 'Automation', 'Energy']
      },
      {
        id: 'rpm-meter',
        title: 'RPM Meter using IR and 16×2 Display',
        description: 'Measures rotational speed and displays it digitally.',
        skills: ['Sensor Interfacing', 'Display Programming', 'Electronics Troubleshooting'],
        tags: ['Measurement', 'Display', 'IR Sensor']
      },
      {
        id: 'ultrasonic-glasses',
        title: 'Ultrasonic Glasses for Blind People',
        description: 'Uses ultrasonic sensors to detect obstacles and alerts the wearer via audio.',
        skills: ['Embedded Programming', 'Sensor Integration', 'Prototyping'],
        tags: ['Assistive Tech', 'Ultrasonic', 'Audio']
      },
      {
        id: 'traffic-signal',
        title: 'Traffic Signal Lights using Arduino',
        description: 'Simulates traffic light operation using Arduino and LEDs.',
        skills: ['Embedded Programming', 'Digital Electronics', 'Timing Logic'],
        tags: ['Arduino', 'Automation', 'LED']
      },
      {
        id: 'rov-4w',
        title: '4-Wheeled ROV',
        description: 'Remote operated vehicle for terrain exploration.',
        skills: ['Motor Control', 'Embedded Systems', 'Mechanical Design'],
        tags: ['Remote Control', 'Exploration', 'Vehicle']
      },
      {
        id: 'rov-2w',
        title: '2-Wheeled ROV',
        description: 'Compact remote-controlled vehicle with two wheels for agile movement.',
        skills: ['Stability Algorithms', 'Motor Control', 'Circuit Design'],
        tags: ['Remote Control', 'Balance', 'Compact']
      }
    ]
  },
  {
    id: 'drones-uav',
    name: 'Drones & UAV Systems',
    description: 'Flight controllers, drones, ESCs, and UAV design',
    projects: [
      {
        id: 'fc-stm32',
        title: 'Custom Flight Controller using STM32',
        description: 'STM32-based controller with IMU, GPS for precise drone stabilization and navigation.',
        skills: ['STM32', 'Sensor Fusion', 'PID Control', 'Real-time Systems'],
        tags: ['Flight Control', 'STM32', 'Navigation']
      },
      {
        id: 'fc-arduino',
        title: 'Custom Flight Controller using Arduino',
        description: 'Arduino-based flight controller for stabilizing and controlling drones.',
        skills: ['Embedded Programming', 'Sensor Fusion', 'PID Control'],
        tags: ['Flight Control', 'Arduino', 'Stabilization']
      },
      {
        id: 'quadcopter',
        title: 'FC- Quadcopter V1',
        description: 'Fully assembled and controlled Quadcopter for research and practical use.',
        skills: ['Aerodynamics', 'Motor & ESC Control', 'UAV Design'],
        tags: ['Quadcopter', 'UAV', 'Flight']
      },
      {
        id: 'custom-esc',
        title: 'Custom ESC (Electronic Speed Controller)',
        description: 'Custom speed controller to regulate motor speed for drones or EVs.',
        skills: ['Power Electronics', 'Embedded Control', 'Motor Interfacing'],
        tags: ['ESC', 'Motor Control', 'Power']
      },
      {
        id: 'nrf-comm',
        title: 'Transmitter & Receiver using NRF modules',
        description: 'Wireless communication system for remote control and telemetry.',
        skills: ['RF Communication', 'Embedded Programming', 'Circuit Integration'],
        tags: ['Wireless', 'NRF', 'Telemetry']
      }
    ]
  },
  {
    id: 'theoretical',
    name: 'Theoretical & Conceptual Projects',
    description: 'AI, ADAS, and high-payload UAV concepts',
    projects: [
      {
        id: 'adas-offroad',
        title: 'ADAS for Off-Roading using Jetson Nano',
        description: 'Advanced Driver Assistance System concept for off-road vehicles using AI.',
        skills: ['AI Integration', 'Sensor Fusion', 'System Simulation'],
        tags: ['ADAS', 'AI', 'Off-road']
      },
      {
        id: 'octocopter',
        title: '5kg Payload Drone (Octocopter)',
        description: 'Conceptual design of a heavy-lift drone capable of carrying a 5kg payload.',
        skills: ['UAV Design', 'Structural Mechanics', 'Flight Dynamics'],
        tags: ['Octocopter', 'Heavy-lift', 'SIH\'23']
      }
    ]
  }
];
