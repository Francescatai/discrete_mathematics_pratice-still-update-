# 編碼練習:售票處
# 0-11:free
# 12-18 or welfare:75%
# 19-120:100%
# else:error
def weifare_price(age, price, welfare=False):
    if 0 < age < 11:
        final = price*0
    elif 12 <= age <= 18 or welfare == 1:
        final = price*0.75
    elif 19 <= age <= 120:
        final = price
    else:
        final = "請輸入正確的年齡"
    return print(final)


if __name__ == '__main__':
    age = int(input("請輸入年齡:"))
    price = float(input("請輸入票價:"))
    welfare = bool(int(input("是否適用福利(是輸入1，不是輸入0:")))
    weifare_price(age, price, welfare)