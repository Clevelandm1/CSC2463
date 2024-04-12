/*
Each player must twist the knob at least a little bit in order for their light to get brighter.
When a player's turn is over, they should press the button to make it the next players turn.
Players should take turns twisting until the light gets too bright and turns off.
Whenever the light turns off, players should reset the dial back to 0, and reset each light to restart.
*/

// These constants won't change. They're used to give names to the pins used:
const int analogInPin = A0;   // Analog input pin that the potentiometer is attached to
int analogOutPin = 10;  // Analog output pin that the LED is attached to
const int buttonPin = 2;      // Digital input to change players

int sensorValue = 0;  // value read from the pot
int outputValue = 0;  // value output to the PWM (analog out)
int buttonState = 0;  //0 is player 1; 1 is player 2

int endBrightness = random(150, 250);

void setup() {
  // initialize serial communications at 9600 bps:
  Serial.begin(9600);
  //initialize digital button input
  pinMode(buttonPin, INPUT);
}

void loop() {
  // read the analog in value:
  sensorValue = analogRead(analogInPin);
  // map it to the range of the analog out:
  outputValue = map(sensorValue, 0, 1023, 0, 255);
  // read button state
  buttonState = digitalRead(buttonPin);
  // if statement will switch players so each player has a turn
  if(buttonState == HIGH){
    if(analogOutPin == 10){
      analogOutPin = 11;
    }
    else{
      analogOutPin = 10;
    }
    
    //this delay should be longer than a single press meant to change players
    delay(300);
    buttonState = digitalRead(buttonPin);
    if(buttonState == HIGH){
      //if the button state is still high after .3 seconds, one more delay of 3 seconds is in place just
      //in case the button was pressed for too long
      //this also allows the longer delay to not be there unless accidentally pressed for too long
      //if the button is still pressed for the .3+2.7=3 seconds, the random brightness will be randomized
      delay(2700);
      if(buttonState == HIGH){
        endBrightness = random(150, 250);
      }
    }
  }

  // set max brightness before light turns off
  if(outputValue >= endBrightness){
    analogWrite(analogOutPin, 0);
  }
  else{
    analogWrite(analogOutPin, outputValue);
  }
  
  // print the results to the Serial Monitor:
  Serial.print("sensor = ");
  Serial.print(sensorValue);
  Serial.print("\t output = ");
  Serial.println(outputValue);

  // wait 2 milliseconds before the next loop for the analog-to-digital
  // converter to settle after the last reading:
  delay(2);
}
