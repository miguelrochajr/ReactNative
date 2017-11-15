export * from './Button';
export * from './Card';
export * from './CardSection';
export * from './Header';
export * from './Input';

/*
  This index file is the one which gathres all the commmon components.
  The main goal here is to avoid multiple unecessary import states at the
  top of any component we make it. The diagram is like this:

  Button -----------|
                    |
  Card--------------|
                    |-------> index.js
  CardSection-------|
                    |
  Header -----------


  So when you need to grab some common component, just import index.js and
  use the destructor. Then, you are all set and have a clean code.
*/
