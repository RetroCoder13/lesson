class Dog():
    name = ""
    colour = ""
    def __init__(self, myName, myColour):
        self.name = myName
        self.colour = myColour
    
    def bark(self, barkTimes):
        for i in range(barkTimes):
            print("Woof!")
    
    def getName(self):
        return self.name
    
    def setName(self,newName):
        self.name = newName

class Puppy(Dog):
    shoesChewed = 0
    dob = ""
    def __init__(self, myName, myColour,myDOB):
        super().__init__(myName, myColour)
        dob = myDOB
    
    def bark(self, barkTimes):
        for i in range(barkTimes):
            print("Yap!")
    
    def originalBark(self, barkTimes):
        super().bark(barkTimes)

dog = Puppy("Jamie","white","")
dog.bark(5)
dog.originalBark(5)