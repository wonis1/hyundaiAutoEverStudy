package service;

import java.util.ArrayList;
import java.util.List;

public class Inventory {
    public List<Item> items = new ArrayList<>();

    public void add(Item item) {
        items.add(item);
    }
}