import random
import turtle
from turtle import *
import math
import cv2
# import numpy as np
import os

import sqlite3


class Foo(object):
    obj = 0

    def __new__(cls, *dt, **mp):
        obj = 1

    def __init__(self):
        self.obj = 2


o = Foo()

print(o.obj)
