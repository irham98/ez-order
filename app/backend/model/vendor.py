from user import *

class Vendor(User):
    def __init__(self, name, username, store_image, mobile_no, tags):
        self.store_image = store_image
        self.name = name
        self.username = username
        self.mobile_no = mobile_no
        self.items = {}
        self.tags = tags

    def __init__(self, json_str):
        

    def __add_item(self, new_item):
        if new_item.cat in self.items:
            items[new_item.cat].append(new_item)
        else:
            items[new_item.cat] = [new_item]
    
    def to_dict(self):
        dic = self.items
        for cat in dic:
            dic[cat] = [i.to_dict for i in dic[cat]]
        return {
            'name' : self.name,
            'username' : self.username,
            'store_image' : self.store_image,
            'mobile_no' : self.mobile_no,
            'items' : dic
            'tags' : self.tags
        }