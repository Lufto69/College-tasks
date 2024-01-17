import random
import turtle
from turtle import *
import math
# import cv2
# import numpy as np
import os


class MyClass:

    def __init__(self, name):
        self.name = name

    def sayHello(self):
        print("Hello, " + self.name)


obj = MyClass("Alice")

obj.sayHello()