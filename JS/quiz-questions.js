

 // Array of Objects
 const quiz = [
    //  Q1
    {
        q:'If you notice a driver who is steering side to side or stopping without reason, you should?',
        options:['give yourself extra space','honk at them','flash your lights and pass them','follow them to their destination'],
        answer:0
    },
    // Q2
    {
        q:'What color What should the driver of Car A do?',
        options:['Maintain speed','Slow down, honk, and wave Car B in.','Slow down to allow Car B safe entry.','blSpeed up to get ahead of merging Car B.ue'],
        answer:2,
        img: 'img/Q2.png'
    },
    // Q3
    {
        q:'When can I use a personal electronic device if Im in the Graduated Licensing',
        options:['None of the above - I cannot use a personal electronic device in the GLP','Im using a speaker phone or hands-free phone ','Ive been in the program for at least six months','Ive secured my cell phone to the vehicle'],
        answer:0
    },
    // Q4
    {
        q:'This sign means:',
        options:['Left turns only at this intersection.','Left and right turns allowed at this intersection.','Two-way traffic ahead.','Two-way left turn lane.'],
        answer:3,
        img: 'img/Q4.png'
    },
    // Q5
    {
        q:'Are you allowed to use hands-free &#44;voice to text&#44; features on your phone while operating a vehicle if you have your learner&#44;s (L) or novice (N) licence?',
        options:['You are not allowed to operate hands-free electronic devices at any time while driving.',
        'Only if the device requires one touch to activate or deactivate.',
        'Only when a qualified supervisor is driving with you.',
        'Only during daylight hours.'],
        answer:0
    },
    // Q6
    {
      q:'Why is increasing the space margin between you and a car in front of your vehicle a good idea when being tailgated?',
      options:['to let the tailgater know that they have to back away.',
      'you can stop more gradually if the car in front suddenly brakes or a hazard appears, reducing the chance of the tailgater crashing into you. ',
      'you should actually decrease the space margin to encourage the person in front to speed up.',
      'because it will allow the person behind you to more easily pass.'],
      answer:1,
      img:'img/Q6.png'
    },
    // Q7
    {
      q:'You MUST stop for a school bus',
      options:['at all times',
      'when it is carrying children',
      'when it is waiting by a school',
      'when its red lights are flashing'],
      answer:3
    },
    // Q8
    {
      q:'A steady yellow light means:',
      options:['accelerate if you know you can make it through before it turns red.',
      'stop only if there are other vehicles in the intersection.',
      'stop in all cases.',
      'stop unless it is unsafe to do so.'],
      answer:3,
      img:'img/Q8.png'
    },
    // Q9
    {
      q:'This sign on a transit bus when it is signalling to enter traffic means',
      options:['yield on all roads where the speed limit is 30 km/h or lower.',
      'yield only if there is no traffic behind you.',
      'yield, regardless of the posted speed limit.',
      'you must yield to them where the speed limit is 60 km/h or lower.'],
      answer:3,
    },
    // Q10
    {
      q:'When approaching a stopped emergency vehicle with flashing lights on highways with speed limits of under 80 km/h, in addition to changing lanes, you must slow to',
      options:['50 km/h.',
      '70 km/h.',
      '40 km/h.',
      '60 km/h.'],
      answer:2,
    },
    // Q11
    {
        q:'If you don&#44;t know what other drivers are going to do,',
        options:['yield the right of way to be safe',
        'flash your high beam headlights at them',
        'take your right of way quickly',
        'honk or yell at them'],
        answer:0
    },
    // Q12
    {
        q:'Headlights must be used',
        options:['during the day.',
        'from dawn to dusk.',
        'overnight.',
        'from 30 minutes after sunset until 30 minutes before sunrise.'],
        answer:3
    },
    // Q13
    {
        q:'In this traffic circle, the driver of Vehicle A wants to head down Street B. The correct path is',
        options:['to turn left as soon as Motorcycle C passes by',
        'to wait until the traffic circle is empty, then turn left',
        'complete one full revolution of the traffic circle before exiting',
        'to yield to traffic in the circle, turn right when safe, and exit right down Path B'],
        answer:3,
        img:'img/Q13.png'
    },
    // Q14
    {
        q:'Before entering from a side street or alley must the driver of Car A stop before the sidewalk?',
        options:['If the intersection is clear you can just slow down and proceed.',
        'You only need to stop if there are pedestrians present.',
        'You must stop before the edge of the road.',
        'Yes, you must always stop before crossing a sidewalk out of an alleyway or side street.'],
        answer:3,
        img:'img/Q14.png'
    },
    // Q15
    {
        q:'This signal over a lane means',
        options:['this lane is under construction',
        'do not drive in this lane',
        'this lane is about to open',
        'move out of this lane and into the lane with the green arrow'],
        answer:3,
        img:'img/Q15.png'
    },
    // Q16
    {
      q:'This sign tells you',
      options:['that there is a faster speed limit ahead',
      'the ideal speed for this road in any conditions',
      'the maximum speed unless you are passing',
      'the fastest you may drive under ideal conditions'],
      answer:3,
      img:'img/Q16.png'
    },
    // Q17
    {
      q:'If driving on a slippery road would you drive at the posted speed limit?',
      options:['Yes, as long as I don&#44;t go over the speed limit I should be able to avoid skidding.',
      'I can decide to choose a reduced speed that is safe or increase my following distance with other vehicles to avoid skidding.',
      'Only if my vehicles tires were designed for all weather conditions.',
      'Only if I have snow tires on my vehicle.'],
      answer:1,
    },
    // Q18
    {
      q:'Inertia is',
      options:['the force that pulls everything towards the earth',
      'the tendency for moving objects to continue moving forward in a straight line',
      'the point around which all of an object&#44;s weight is balanced',
      'the weight of a vehicle'],
      answer:1,
    },
    // Q19
    {
      q:'This sign means:',
      options:['One-way traffic only.',
      'No turns permitted at this intersection.',
      'No lane changes allowed.',
      'Yield to traffic in intersection.'],
      answer:1,
      img:'img/Q19.png'
    },
    // Q20
    {
        q:'This sign warns',
        options:['divided highway ahead',
        'passing is prohibited ahead',
        'two-way traffic ahead',
        'passing is allowed ahead'],
        answer:2,
        img:'img/Q20.png'
    },   
    // Q21
    {
        q:'If a pedestrian is crossing the street with a guide dog, a driver should',
        options:['Drive closer to them as they are listening for the sounds of vehicles.',
        'Give a short honk on the horn to let them know it’s alright to cross.',
        'Not treat them differently than any other pedestrian.',
        'Give them extra room as they may be uncertain about where traffic is in relation to them. '],
        answer:3,
    }, 
    // Q22
    {
        q:'If you are going into a curve at high speed, why is taking your foot off the accelerator a good idea before the curve?',
        options:['youll always need to brake while in the curve',
        'you will need power to accelerate while in the curve.',
        'your foot should never be over the accelerator in a curve',
        'it is a good strategy to help slow you down without using your brakes in the curve.'],
        answer:3,
        img:'img/Q19.png'
    }, 
    // Q23
    {
        q:'As a driver you should',
        options:['carefully watch the car ahead of you',
        'rarely look in your mirrors',
        'constantly check the sides of the road and all of your mirrors, as well as the road ahead',
        'carefully watch the car behind you'],
        answer:2,
    },
    // Q24
    {
        q:'After you have stopped at a steady red light, you may',
        options:['turn right only',
        'turn right or turn left into a one-way street if it is safe and no signs prohibit it',
        'drive straight through',
        'turn left or right'],
        answer:1,
    },
    // Q25
    {
      q:'The MINIMUM safe following distance of two seconds behind the car ahead of you is',
      options:['only on highways.',
      'for only bad weather conditions.',
      'for ideal conditions in the city.',
      'for ideal conditions in the city.'],
      answer:2,
    }
   ]