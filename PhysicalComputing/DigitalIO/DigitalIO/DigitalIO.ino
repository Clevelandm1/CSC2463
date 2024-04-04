/*
  Button

  Turns on and off a light emitting diode(LED) connected to digital pin 13,
  when pressing a pushbutton attached to pin 2.

  The circuit:
  - LED attached from pin 13 to ground through 220 ohm resistor
  - pushbutton attached to pin 2 from +5V
  - 10K resistor attached to pin 2 from ground

  - Note: on most Arduinos there is already an LED on the board
    attached to pin 13.

  created 2005
  by DojoDave <http://www.0j0.org>
  modified 30 Aug 2011
  by Tom Igoe

  This example code is in the public domain.

  https://www.arduino.cc/en/Tutorial/BuiltInExamples/Button
*/

// constants won't change. They're used here to set pin numbers:
const int buttonPin = 2;  // the number of the pushbutton pin
const int buttonPin2 = 4;
const int ledPin = 13;    // the number of the LED pin
const int ledPin2 = 12;

// variables will change:
int buttonState = 0;  // variable for reading the pushbutton status
int buttonState2 = 0;

void setup() {
  // initialize the LED pin as an output:
  pinMode(ledPin, OUTPUT);
  // initialize the pushbutton pin as an input:
  pinMode(buttonPin, INPUT);

  pinMode(ledPin2, OUTPUT);
  pinMode(buttonPin2, INPUT);
}

void loop() {
  // read the state of the pushbutton value:
  buttonState = digitalRead(buttonPin);
  buttonState2 = digitalRead(buttonPin2);

  // check if the pushbutton is pressed. If it is, the buttonState is HIGH:
  if (buttonState == HIGH && buttonState2 == LOW) {
    // turn LED on:
    digitalWrite(ledPin, HIGH);
    delay(400);
    digitalWrite(ledPin2, HIGH);
    delay(600);
    digitalWrite(ledPin2, LOW);
    delay(200);
    digitalWrite(ledPin, LOW);
    delay(300);
  } 

  else if(buttonState == LOW && buttonState2 == HIGH){
    digitalWrite(ledPin, HIGH);
    delay(400);
    digitalWrite(ledPin2, HIGH);
    digitalWrite(ledPin, LOW);
    delay(200);
    digitalWrite(ledPin2, LOW);
    digitalWrite(ledPin, HIGH);
    delay(100);
    digitalWrite(ledPin2, HIGH);
    digitalWrite(ledPin, LOW);
    delay(20);
    digitalWrite(ledPin2, LOW);
    digitalWrite(ledPin, HIGH);
    delay(100);
    digitalWrite(ledPin2, HIGH);
    digitalWrite(ledPin, LOW);
    delay(200);
    digitalWrite(ledPin2, LOW);
    digitalWrite(ledPin, HIGH);
    delay(400);
    digitalWrite(ledPin2, HIGH);
    digitalWrite(ledPin, LOW);
  }

  else if(buttonState == HIGH && buttonState2 == HIGH){
    //SOS morse code
    digitalWrite(ledPin, HIGH);
    delay(200);
    digitalWrite(ledPin, LOW);
    delay(200);
    digitalWrite(ledPin, HIGH);
    delay(200);
    digitalWrite(ledPin, LOW);
    delay(200);
    digitalWrite(ledPin, HIGH);
    delay(200);
    digitalWrite(ledPin, LOW);
    delay(200);

    digitalWrite(ledPin2, HIGH);
    delay(400);
    digitalWrite(ledPin2, LOW);
    delay(200);
    digitalWrite(ledPin2, HIGH);
    delay(400);
    digitalWrite(ledPin2, LOW);
    delay(200);
    digitalWrite(ledPin2, HIGH);
    delay(400);
    digitalWrite(ledPin2, LOW);
    delay(400);
  }

  else {
    // turn LED off:
    digitalWrite(ledPin, LOW);
    digitalWrite(ledPin2, LOW);
  }
}
