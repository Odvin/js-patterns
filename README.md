# js-patterns

## Creational patterns 

### Singleton
Ensure a class only has one instance, and provide a global point of access to it.

### Builder

Separate the construction of a complex object from its representation so that the same construction process can create different representations.

### Prototype
Specify the kind of objects to create using the prototypical instance, and create new objects by copying this prototype.

For classes use inheritance.

### Factory
Define an interface for creating an object, but let subclasses decide which class to instantiate. Factory Methods lets a class defer instantiation to subclasses.

## Structural Patterns

### Adapter
Convert the interface of a class into another clients expect. Adapter lets classes work together that couldn't otherwise because of incompatible interfaces.

### Proxy Pattern
Provide a surrogate or palceholder for another object to control access to it.

### Composites
Compose objects into tree structures to represent part-whole hierarchies. Composite lets clients treat individual objects and compositions of objects uniformly.

### Decorator
Attach additional responsibilities to an object dynamically/ Decorators provide a flexible alternative to subclassing for extending functionality.

## Behavioral

### Chain Of Responsibility
Avoid coupling the sender of a request to its receiver by giving more than one object of a change to handle the request. Chain the receiving objects and pass the request along the chain.

### Command
Encapsulate a request as an object, thereby letting you parameterize with different request. queue or log requests, and support undoable operations.

### Iterator
Provide a way to access the elements of an aggregate object sequentially without exposing its underlying representations.

### Observer
Define a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically.

### Strategy
Define a family of algorithms, encapsulate each one, and make them interchangeable. Strategy lets the algorithm vary independently from clients that use it.
