const quiz = [
  // Q1 - Left Turn Only
  {
      q: 'What does a circular blue sign with a white arrow pointing to the lower left indicate?',
      options: ['Turn left ahead', 'No left turn', 'Keep to the left of this sign', 'Roundabout ahead'],
      answer: 2,
      img: 'img/Keep to the Left of this Sign.jpg'
  },
  // Q2 - Overtaking on the Left
  {
      q: 'When may you overtake on the left?',
      options: ['When the vehicle in front is signalling to turn right', 'When directed to do so by road signs or markings', 'When the right-hand lane is moving more slowly than the left-hand lane.', 'All of the above'],
      answer: 3
  },
  // Q3 - National Speed Limit for Cars on a Single Carriageway
  {
      q: 'What is the national speed limit for cars on a single carriageway in the UK?',
      options: ['50 mph', '60 mph', '70 mph', '80 mph'],
      answer: 1
  },
  // Q4 - No Entry Sign
  {
      q: 'What does this sign mean?',
      options: ['No entry', 'No stopping', 'No overtaking', 'No vehicles'],
      answer: 0,
      img: 'img/No Entry.jpg'
  },
  // Q5 - Hazard Warning Lights
  {
      q: 'When should you use your hazard warning lights?',
      options: ['When you are double-parked', 'When you are driving in fog', 'When you are temporarily obstructing traffic', 'When you are driving slowly'],
      answer: 2
  },
  // Q6 - Flashing Amber Light at a Pelican Crossing
  {
      q: 'What does a flashing amber light at a pelican crossing mean?',
      options: ['Wait for the green light', 'Proceed if the crossing is clear', 'It is safe to proceed', 'Wait for the red light'],
      answer: 1
  },
  // Q7  - Minimum Tread Depth for Car Tyres
  {
      q: 'What is the minimum tread depth for car tyres in the UK?',
      options: ['1.0 mm', '1.6 mm', '2.0 mm', '2.5 mm'],
      answer: 1
  },
  // Q8 - School Crossing Patrol Sign
  {
      q: 'What does this sign mean?',
      options: ['School crossing patrol', 'Pedestrian crossing ahead', 'Children playing', 'Cycle route ahead'],
      answer: 0,
      img: 'img/School Crossing Patrol.jpg'
  },
  // Q9 - Using Mobile Phones While Driving
  {
      q: 'When are you allowed to use your mobile phone while driving?',
      options: ['When you are stationary in traffic', 'When you are using a hands-free system', 'When you are making an emergency call', 'All of the above'],
      answer: 2
  },
  // Q10 - No Stopping Sign
  {
      q: 'What does this sign indicate?',
      options: ['No stopping', 'Lane closed', 'No entry', 'No overtaking'],
      answer: 0,
      img: 'img/No Stopping.png'
  },
  // Q11 - Horse Rider on the Road
  {
      q: 'What should you do if you see a horse rider on the road?',
      options: ['Speed up and pass quickly', 'Sound your horn to alert them', 'Slow down and give them plenty of space', 'Flash your lights to warn them'],
      answer: 2
  },
  // Q12 - Car Skidding
  {
      q: 'What does a triangular sign with a picture of a car skidding mean?',
      options: ['Slippery road ahead', 'Skid risk area', 'Accident black spot', 'Dangerous bend'],
      answer: 0,
      img: 'img/Car Skidding.jpg'
  },
  // Q13 - Legal Alcohol Limit for Drivers in Scotland
  {
      q: 'What is the legal alcohol limit for drivers in Scotland?',
      options: ['50 milligrams per 100 millilitres of blood', '80 milligrams per 100 millilitres of blood', '20 milligrams per 100 millilitres of blood', '5 milligrams per 100 millilitres of blood'],
      answer: 0
  },
  // Q14 - Shared Path for Pedestrians and Cyclists
  {
      q: 'What does this sign mean?',
      options: ['No vehicles except bicycles', 'Cycle route ahead', 'Shared path for pedestrians and cyclists', 'No cycling'],
      answer: 2,
      img: 'img/Shared Path - Cyclists and Pedestrians.jpg'
  },
  // Q15 - Fog Lights
  {
      q: 'When should you use your fog lights?',
      options: ['When it is raining', 'When visibility is reduced to less than 100 metres', 'When driving at night', 'When driving on a motorway'],
      answer: 1
  },
  // Q16 - Turning Right onto a Dual Carriageway
    {
        q: 'When turning right onto a dual carriageway, what should you do?',
        options: ['Check that the central reservation is wide enough for your vehicle', 'Position your vehicle well to the left of the side road', 'Move into the right-hand lane as soon as possible', 'Speed up and merge with the traffic'],
        answer: 0
    },
  // Q17 - Aquaplaning
  {
      q: 'What should you do if your vehicle starts to aquaplane?',
      options: ['Brake firmly', 'Steer sharply', 'Ease off the accelerator', 'Speed up'],
      answer: 2
  },
  // Q18 - No Through Road
  {
      q: 'What does this sign mean?',
      options: ['No entry for vehicles', 'No through road', 'Road closed ahead', 'No vehicles'],
      answer: 1,
      img: 'img/No Through Road.jpg'
  },
  // Q19 - Rumble Strip
  {
      q: 'What is the purpose of a rumble strip on the road?',
      options: ['To warn drivers of a hazard ahead', 'To reduce noise pollution', 'To provide grip in wet conditions', 'To mark the edge of the road'],
      answer: 0,
      img: 'img/Rumble Strip.svg'
  },
  // Q20 - Green Traffic Light
  {
      q: 'What does a green light at a traffic signal mean?',
      options: ['Go if the way is clear', 'Stop', 'Prepare to stop', 'Proceed with caution'],
      answer: 0
  },
  // Q21 - Pedestrian with a White Cane
  {
      q: 'What should you do if you see a pedestrian with a white cane at a crossing?',
      options: ['Sound your horn to alert them', 'Stop and give way', 'Proceed with caution', 'Flash your lights to warn them'],
      answer: 1
  },
  // Q22 - Mandatory Direction of Travel
  {
      q: 'What does a blue circle with a white arrow pointing upwards indicate?',
      options: ['One-way street ahead', 'No entry', 'Mandatory direction of travel', 'Roundabout ahead'],
      answer: 2,
      img: 'img/Mandatory direction of travel.jpg'
  },
  // Q23 - Box Junction
  {
      q: 'What is the purpose of a box junction?',
      options: ['To mark a pedestrian crossing', 'To prevent congestion at busy junctions', 'To indicate a no-parking zone', 'To mark a bus lane'],
      answer: 1,
      img: 'img/Box Junction.svg'
  },
  // Q24 - Hazard Sign
  {
      q: 'What does this sign mean?',
      options: ['Warning of a hazard ahead', 'No entry', 'Stop', 'Give way'],
      answer: 0,
      img: 'img/Hazard Sign.jpg'
  },
  // Q25 - No Entry Sign
  {
      q: 'What should you do if you are dazzled by the headlights of an oncoming vehicle?',
      options: ['Flash your headlights', 'Slow down, or stop if necessary', 'Close your eyes', 'Speed up to pass quickly'],
      answer: 1
  },
  // Q26 - Hatch Markings
  {
      q: 'What do hatch markings on the road indicate?',
      options: ['A pedestrian crossing', 'A cycle lane', 'A no-overtaking zone', 'A no-parking zone'],
      answer: 3,
      img: 'img/No Stopping.svg'
  },
  // Q27 - National Speed Limit
  {
      q: 'What is the national speed limit for cars on a dual carriageway in the UK?',
      options: ['50 mph', '60 mph', '70 mph', '80 mph'],
      answer: 2
  },
  // Q28 - National Speed Limit for Cars in Built-up Areas
  {
      q: 'What is the national speed limit for cars in built-up areas in the UK?',
      options: ['20 mph', '30 mph', '40 mph', '50 mph'],
      answer: 1
  },
  // Q29 - How to Identify Speed Limits on Roads Without Signs
  {
      q: 'How can you identify the speed limit on a road without signs?',
      options: ['By the type of traffic on the road', 'By the street lighting', 'By the speed of other road users', 'By reference to the last sign you passed'],
      answer: 1
  },
  // Q30 - Double White Solid Lines
  {
      q: 'What do solid double white lines in the center of the road mean?',
      options: ['No crossing the white line', 'Overtaking allowed if safe', 'No stopping', 'No parking'],
      answer: 0,
      img: 'img/Double White Solid Lines.svg'
  },
  // Q31 - Single Solid White Line Along Pavement Edge
  {
      q: 'What does a single solid white line along the edge of the pavement indicate?',
      options: ['No stopping', 'Parking is allowed', 'No overtaking', 'No entry'],
      answer: 0,
      img: 'img/Single White Solid Line - Pavement.svg'
  },
  // Q32 - Bus Lane Operation Times
  {
      q: 'When can you drive in a bus lane?',
      options: ['Outside the times shown on the sign', 'During the hours of darkness', 'During the hours of daylight', 'During the times shown on the sign'],
      answer: 0,
      img: 'img/Bus Lane Times.jpg'
  },
  // Q33 - Except Bicycles and Cycles Sign
  {
      q: 'What does this sign mean?',
      options: ['Restrictions do not apply to buses and bicycles', 'No cycling', 'Restrictions only apply to buses and bicycles', 'No vehicles'],
      answer: 0,
      img: 'img/Except Bicycles and Cycles.jpg'
  },
  // Q34 - Road narrows on left ahead
  {
      q: 'What does this sign mean?',
      options: ['Road narrows on left ahead', 'Road narrows on both sides ahead', 'Road narrows on right ahead', 'Road narrows on right and left ahead'],
      answer: 0,
      img: 'img/Road Narrows on Left Ahead.jpg'
  },
  // Q35 - Give Way To Oncoming Traffic
  {
      q: 'What does this sign mean?',
      options: ['Give way to oncoming traffic', 'Priority over oncoming vehicles', 'No driving in the left lane', 'No overtaking'],
      answer: 0,
      img: 'img/Give Way to Oncoming Traffic.jpg'
  },
  // Q36 - Priority Over Oncoming Vehicles
  {
      q: 'What does this sign mean?',
      options: ['Priority over oncoming vehicles', 'Give way to oncoming traffic', 'No driving in the right lane', 'No overtaking'],
      answer: 0,
      img: 'img/Priority Over Oncoming Vehicles.jpg'
  },
  //Q37 - Pedeestrian Crossing
  {
      q: 'What does this sign mean?',
      options: ['Pedestrian crossing', 'No pedestrians', 'School area', 'No stopping'],
      answer: 0,
      img: 'img/Pedestrian Crossing.jpg'
  },
  // Q38 - Mandatory Direction of Travel
  {
      q: 'What does this sign mean?',
      options: ['Mandatory direction of travel', 'Overtake on the left', 'Built-up area to the left', 'Park on the left'],
      answer: 0,
      img: 'img/Mandatory Direction of Travel - Left.jpg'
  },
  // Q39 - Vehicles May Pass Either Side
  {
      q: 'What does this sign mean?',
      options: ['Vehicles may pass either side', 'Parking', 'Turn left, then right', 'Overtaking allowed'],
      answer: 0,
      img: 'img/Vehicles May Pass Either Side.jpg'
  },
  // Q40 - Mini Roundabout
  {
      q: 'What does this sign mean?',
      options: ['Mini roundabout ahead', 'Roundabout ahead', 'Turn right ahead', 'No overtaking'],
      answer: 0,
      img: 'img/Mini Roundabout.jpg'
  },
  // Q41 - All Vehicles Prohibited
  {
      q: 'What does this sign mean?',
      options: ['All vehicles prohibited', 'No entry', 'No stopping', 'No overtaking'],
      answer: 0,
      img: 'img/All Vehicles Prohibited.jpg'
  },
  // Q42 - No Horses
  {
      q: 'What does this sign mean?',
      options: ['No horses', 'Horse riding allowed', 'Beware of horse riders', 'No horse-drawn vehicles'],
      answer: 0,
      img: 'img/No Horses.jpg'
  },
  // Q43 - No Overtaking
  {
      q: 'What does this sign mean?',
      options: ['No overtaking', 'Overtaking allowed', 'Be wary of overtaking', 'Single lane road ahead'],
      answer: 0,
      img: 'img/No Overtaking.jpg'
  },
  // Q44 - Maximum Vehicle Width
  {
      q: 'What does this sign mean?',
      options: ['Maximum vehicle width', 'No entry for wide vehicles', 'Minimum vehicle width', 'Wide vehicles only'],
      answer: 0,
      img: 'img/Maximum Vehicle Width.jpg'
  },
  // Q45 - Maximum Vehicle Length
  {
      q: 'What does this sign mean?',
      options: ['Maximum vehicle length', 'No entry for long vehicles', 'Minimum vehicle length', 'Long vehicles only'],
      answer: 0,
      img: 'img/Maximum Vehicle Length.jpg'
  },
  // Q46 - Maximum Vehicle Height
  {
      q: 'What does this sign mean?',
      options: ['Maximum vehicle height', 'No entry for tall vehicles', 'Minimum vehicle height', 'Tall vehicles only'],
      answer: 0,
      img: 'img/Max Vehicle Height.png'
  },
  // Q47 - 300 yards to a roundabout or the next point at which traffic may leave a route
  {
      q: 'What does this sign mean?',
      options: ['300 yards to a roundabout or the next point at which traffic may leave a route', '300 yards to a U-turn', '300 yards to a standard junction', '300 yards to a traffic-controlled area'],
      answer: 0,
      img: 'img/300 Yards to Change.jpg'
  },
  // Q48 - End of Motorway
  {
      q: 'What does this sign mean?',
      options: ['End of motorway', 'Motorway ahead', 'Motorway exit', 'Motorway services'],
      answer: 0,
      img: 'img/End of Motorway.jpg'
  },
  // Q49 - Tourist Sites
  {
      q: 'What do brown signs like this mean?',
      options: ['Tourist sites', 'Historic sites', 'Pollitically important locations', 'Camping sites'],
      answer: 0,
      img: 'img/Tourist Sites.jpg'
  },
  // Q50 - Staggereed Junction
  {
      q: 'What does this sign mean?',
      options: ['Staggered junction ahead', 'Crossroads ahead', 'T-junction ahead', 'Be wary of junction ahead'],
      answer: 0,
      img: 'img/Staggered Junction.jpg'
  },
  // Q51 - Queues Likely
  {
      q: 'What does this sign mean?',
      options: ['Queues likely', 'Close distance between vehicles', 'Slow-moving traffic', 'Convoy ahead'],
      answer: 0,
      img: 'img/Queues Likely.jpg'
  },
// Q52 - Strong Winds Likely
{
  q: 'What does this sign mean?',
  options: ['Strong winds likely', 'Airport runway ahead', 'Wind farm ahead', 'Wind tunnel ahead'],
  answer: 0,
  img: 'img/Strong Winds Likely.jpg'
},
// Q53 - Hump bridge ahead
{
  q: 'What does this sign mean?',
  options: ['Hump bridge ahead', 'Tunnel ahead', 'Bridge ahead', 'Bump ahead'],
  answer: 0,
  img: 'img/Hump Bridge Ahead.jpg'
},
// Q54 - Tunnel Ahead
{
  q: 'What does this sign mean?',
  options: ['Tunnel ahead', 'Bridge ahead', 'Hump bridge ahead', 'New opening ahead'],
  answer: 0,
  img: 'img/Tunnel Ahead.jpg'
},
// Q55 - Two-Way Traffic
{
  q: 'What does this sign mean?',
  options: ['Two-way traffic', 'One-way traffic', 'Crossroads ahead', 'Traffic congestion ahead'],
  answer: 0,
  img: 'img/Two-Way Traffic.jpg'
},
// Q56 - Roundabout Ahead
{
  q: 'What does this sign mean?',
  options: ['Roundabout ahead', 'Mini roundabout ahead', 'Turn right ahead', 'U-turn ahead'],
  answer: 0,
  img: 'img/Roundabout.jpg'
},
// Q57 - Give Way
{
  q: 'What does this sign mean?',
  options: ['Give way', 'Stop', 'No entry', 'No overtaking'],
  answer: 0,
  img: 'img/Give Way.jpg'
},
// Q58 - Loose Chippings
{
  q: 'What does this sign mean?',
  options: ['Loose chippings ahead', 'Ice ahead', 'Slippery road ahead', 'Road surface is uneven'],
  answer: 0,
  img: 'img/Loose Chippings.jpg'
},
// Q59 - Temporary Diversion
{
  q: 'What does this sign mean?',
  options: ['Temporary diversion route marker', 'Road closed ahead', 'No entry', 'No stopping'],
  answer: 0,
  img: 'img/Temporary Diversion Route Marker.jpg'
},
// Q60 - Solid amber light 
{
  q: 'What does a solid amber light at a traffic signal mean?',
  options: ['Stop', 'Prepare to stop', 'Proceed if the way is clear', 'Wait for the green light'],
  answer: 1
},
// Q61 - Motorway Lane Discipline
{
  q: 'Which lane should you normally use on a motorway?',
  options: ['The left-hand lane', 'The middle lane', 'The right-hand lane', 'Any lane'],
  answer: 0
},
// Q62 - Breakdown on a Motorway
{
  q: 'What should you do if your vehicle breaks down on a motorway?',
  options: ['Stay in your vehicle and wait for help', 'Walk to the nearest emergency phone', 'Move to the hard shoulder and call for assistance', 'Try to repair the vehicle yourself'],
  answer: 2
},
// Q63 - Traffic Officers
{
  q: 'What is the role of a traffic officer on the motorway?',
  options: ['To enforce speed limits', 'To assist with breakdowns and incidents', 'To direct traffic at junctions', 'To issue parking tickets'],
  answer: 1
},
// Q64 - Driving in Fog
{
  q: 'What should you do when driving in fog?',
  options: ['Use your high beam headlights', 'Use your fog lights if visibility is reduced', 'Speed up to get through the fog quickly', 'Keep your windows open to improve visibility'],
  answer: 1
},
// Q65 - Driving in Snow
{
  q: 'What should you do when driving in snow?',
  options: ['Brake sharply if you skid', 'Use a low gear to maintain control', 'Speed up to avoid getting stuck', 'Drive in the middle of the road'],
  answer: 1
},
// Q66 - Driving in Heavy Rain
{
  q: 'What should you do when driving in heavy rain?',
  options: ['Speed up to avoid hydroplaning', 'Use your hazard lights to improve visibility', 'Slow down and increase your following distance', 'Drive in the middle of the road'],
  answer: 2
},
// Q67 - Driving in a Cycle Lane
{
  q: 'When can you drive in a cycle lane?',
  options: ['When there are no cyclists present', 'When the lane is marked with a broken white line', 'When you are overtaking', 'Never'],
  answer: 3
},
// Q68 - Single Yellow Line Parking
{
  q: 'What does a single yellow line along the side of the road indicate?',
  options: ['Parking restrictions apply', 'Parking allowed only for residents', 'No parking at any time', 'Loading only'],
  answer: 0,
  img: 'img/Single Yellow Line.svg'
},
// Q69 - Double Yellow Line Parking
{
  q: 'What does a double yellow line along the side of the road indicate?',
  options: ['Parking allowed', 'No parking at any time', 'Parking allowed for residents', 'Loading only'],
  answer: 1,
  img: 'img/Double Yellow Lines.svg'
},
// Q70 - No Waiting Sign
{
  q: 'What does this sign mean?',
  options: ['No waiting', 'No parking', 'No stopping', 'No entry'],
  answer: 0,
  img: 'img/No Waiting.svg'
},
// Q71 - Lane Discipline on a Dual Carriageway
{
  q: 'What lane should you use on a dual carriageway?',
  options: ['The left-hand lane', 'The right-hand lane', 'Any lane, depending on the traffic', 'The lane with the fewest vehicles'],
  answer: 0
},
// Q72 - Parking When Only Disabled Spaces are Available
{
  q: "You're looking for somewhere to park your vehicle. What should you do if the only free spaces are marked for disabled drivers?",
  options: ['Park in one of these spaces but stay with your vehicle', 'Park in one of the spaces as long as one is kept free', 'Park in one of these spaces and leave a note on your dashboard', 'Wait for a regular parking space to become free'],
  answer: 3
},
// Q73 - Benefits of Carrying Out Manufacturers Reccomended Vehicle Checks
{
  q: "How will you benefit from following the manufacturer's service schedule for your vehicle?",
  options: ['Your vehicle will be cheaper to insure', 'To keep the vehicle in good working order', 'To increase the resale value of the vehicle', 'Your journey times will be reduced'],
  answer: 1
},
// Q74 - Stopped at the Side of the Road
{
  q: "You're stopped at the side of the road. What must you do if you'll be waiting there for some time?",
  options: ['Switch off the radio', 'Apply the steering lock', 'Turn on your hazard lights', 'Switch off the engine'],
  answer: 3
},
// Q75 - Preventing Vehicle Theft
{
  q: 'How can you reduce the risk of your vehicle being broken into at night?',
  options: ['Leave it in a well-lit area', 'Park in a quiet side road', 'Park in a poorly lit area', 'Engage the steering lock'],
  answer: 0
},
// Q76 - Motorway Junctions
{
    q: "What does '25' mean on this motorway sign?",
    options: ['25 miles to the next junction', 'The number of the next junction', '25 minutes to the next junction', '25 miles to the next service station'],
    answer: 1,
    img: 'img/Motorway Sign with Junction.gif'
}
]