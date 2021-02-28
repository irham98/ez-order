
class Item():
    def __init__(self, name, price, cat):
        self.name = name 
        self.price = price
        self.cat = cat
    
    def to_dict(self):
        return {
            'name' : self.name,
            'price' : self.price,
            'cat' : self.cat
        }