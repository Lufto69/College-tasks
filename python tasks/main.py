import random
import turtle
from turtle import *
import math
# import cv2
# import numpy as np
import math


class Shape:
    def __init__(self, name):
        self.name = name

    def area(self):
        print(f"Имя фигуры: {self.name}. Площадь фигуры: неизвестно")


class Rectangle(Shape):
    def __init__(self, a, b):
        super().__init__("Прямоугольник")
        self.a = a
        self.b = b

    def area(self):
        print(f"Имя фигуры: {self.name}. Площадь фигуры: {self.a * self.b}")


class Circle(Shape):
    def __init__(self, r):
        super().__init__("Окружность")
        self.r = r

    def area(self):
        print(f"Имя фигуры: {self.name}. Площадь фигуры: {math.pi * self.r ** 2}")


class CurvedTrapezoid(Shape):
    def __init__(self):
        super().__init__("Криволинейная трапеция")


def area_of_shape(shape):
    shape.area()


rectangle = Rectangle(2, 5)
area_of_shape(rectangle)

circle = Circle(5)
area_of_shape(circle)

curved_trapezoid = CurvedTrapezoid()
area_of_shape(curved_trapezoid)


class gamer:
    def it(x):
        print(x)
class diz:
    def it(x):
        print(x)
class prog:
    def it(x):
        print(x)

gamer.it("айтишник")
diz.it("айтишник")
prog.it("айтишник")

# mas = np.random.random_integers(0, 100, 10)
# print(mas)
# normalized_arr = mas / np.max(mas)
#
# print("Нормализованный массив:", normalized_arr)


#
# matr1 = np.array([[1,2], [3,4]])
# matr2 = np.array([[2,3], [4,5]])
#
#
#
# arr = np.dot(matr1,matr2)
# print(arr)











#
# img = cv2.imread('0_1.png')
# mask = np.zeros(img.shape[:2], np.uint8)
#
#
#
# bgdModel = np.zeros((1, 65), np.float64)
# fgdModel = np.zeros((1, 65), np.float64)
# rect = (50, 50, 450, 290)
#
# cv2.grabCut(img, mask, rect, bgdModel, fgdModel, 5, cv2.GC_INIT_WITH_RECT)
#
# mask2 = np.where((mask == 2) | (mask == 0), 0, 1).astype('uint8')
#
# img = img * mask2[:, :, np.newaxis]
#
#
# cv2.imshow("GrabCutImage", img)
# cv2.imwrite("grabcut_image.jpg", img)
# cv2.waitKey(0)
# cv2.destroyAllWindows()
#
# films = {'Треугольник' : '#37AB65', 'Круг' : '#EC2504', 'Квадрат' : '#CF95D7'}
# j = str(input('ведите фигуру'))
# for k, ja in films.items():
#     if k == j:
#         if j == 'Квадрат':
#             pendown()
#             color(ja)
#             begin_fill()
#             forward(50)
#             right(90)
#             forward(50)
#             right(90)
#             forward(50)
#             right(90)
#             forward(50)
#             end_fill()
#             penup()
#             goto(100, 0)
#         if j == 'Круг':
#             pendown()
#             color(ja)
#             begin_fill()
#             circle(50)
#             end_fill()
#             penup()
#             goto(100, 0)
#         if j == 'Треугольник':
#             pendown()
#             color(ja)
#             begin_fill()
#             forward(50)
#             right(120)
#             forward(50)
#             right(120)
#             forward(50)
#             right(120)
#             end_fill()
#             penup()
#             goto(100, 0)
#
#
# done()
#
# t = turtle.Turtle()
# t.speed(400)
#color = ['#37AB65', '#3DF735', '#AD6D70', '#EC2504', '#8C0B90', '#C0E4FF', '#27B502', '#7C60A8', '#CF95D7']
#
#speed(10)
#
# le =[]
# while True:
#
#     A = input("Введите имя")
#     if A.lower() == 'break':
#         break
#     le.append(A)
#
# if len(le) < 4:
#     print("недостаточно людей")
# else:
#     num = len(le) // 2
#     tem_1 = le[:num]
#     tem_2 = le[num:]
#
#     print("ком 1")
#     for n in tem_1:
#         print(n)
#
#     print("ком 2")
#     for n in tem_2:
#         print(n)
# n = int(input())
# i = 0
# x = 1
# while n != x:
#     for i in range(0, n):
#         if n > x:
#             x = 2**i
#             i = i + 1
#             print(x)
#         elif n <= x:
#             break
# penup()
# while i < s:
#     x = random.randint(-300, 300)
#     y = random.randint(-200, 200)
#     goto(x, y)
#     pendown()
#
#     color('red', 'yellow')
#     begin_fill()
#     ii=0
#     while ii <= 11:
#         right(10)
#         fd(80)
#         left(160)
#         fd(100)
#         ii = ii + 1
#     end_fill()
#
#     penup()
#     i = i + 1
#
#
#
# exitonclick()
#pas = "Burderhaft, viski, sex and candy"
# for p in pas:
#     p = input("Введите пароль: ")
#     if p == "Burderhaft, viski, sex and candy":
#         t.pendown()
#         t.write("True")
#         t.penup()
#         break
#
# i=0
# while i < 100:
#     x = random.randint(-300, 300)
#     y = random.randint(-300, 300)
#     r = random.randint(1, 70)
#     t.pendown()
#     t.color(random.choice(color), random.choice(color))
#     t.begin_fill()
#     t.circle(r)
#     t.end_fill()
#     t.penup()
#     t.goto(x, y)
#     i = i+1

# t.speed(10)
# t.color(random.choice(color), random.choice(color))
# t.begin_fill()
# t.forward(100)
# t.right(90)
# t.forward(50)
# t.right(90)
# t.forward(100)
# t.right(90)
# t.forward(50)
# t.end_fill()
#
# t.penup()
# t.goto(-100, 0)
# t.pendown()
#
# t.color(random.choice(color), random.choice(color))
# t.begin_fill()
# t.forward(100)
# t.right(90)
# t.forward(50)
# t.right(90)
# t.forward(100)
# t.right(90)
# t.forward(50)
# t.end_fill()
#
# t.penup()
# t.goto(0, -200)
# t.pendown()
#
# t.color(random.choice(color), random.choice(color))
# t.begin_fill()
# t.forward(100)
# t.right(90)
# t.forward(100)
# t.right(90)
# t.forward(100)
# t.right(90)
# t.forward(100)
# t.end_fill()
# заканчиваем рисование
# t.penup()
# t.goto(200, 0)
# t.pendown()
# t.write("Угадай число",
# font=("Arial", 16, "normal"))
# t.color(random.choice(color), random.choice(color))
# t.begin_fill()
#
# g = random.randint(1,3)
#
# is_win = True
# while is_win:
#     h = int(turtle.textinput("Игра", "Введите число от 1 до 3"))
#     if h == g:
#         t.penup()
#         t.goto(50, 0)
#         t.pendown()
#         t.write("true",
#         font = ("Arial", 16, "normal"))
#         is_win = False
#     else:
#         t.penup()
#         t.goto(50, 0)
#         t.right(90)
#         t.forward(30)
#         t.pendown()
#         t.write("false",
#         font = ("Arial", 16, "normal"))
#
# t.end_fill()
# turtle.done()
#
# a = float(input("A = "))
# b = float(input("B = "))
# c = float(input("C = "))
#
# D = b*b + 4 * a * c
# print("Дискрименант =", D)
#
# if D>0:
#   x1 = (-b + math.sqrt(D)) / 2*a
#   x2 = (-b - math.sqrt(D)) / 2*a
#   print("Корни", x1, x2)
# elif D == 0:
#     x1 = (-b + math.sqrt(D)) / 2 * a
#     print("Корень", x1)
# else:
#     print("Нет решанния")
#
#
#

