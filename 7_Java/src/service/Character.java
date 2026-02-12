package service;

import domain.Combatant;
import domain.DamageCalculator;
import domain.Type;

public class Character implements Combatant {

    private final String name;
    private int hp;
    private int atk;
    private Type type;
    private Inventory inventory;

    public Character(String name, int hp, int atk, Type type) {
        this.name = name;
        this.hp = hp;
        this.atk = atk;
        this.type = type;
        this.inventory = new Inventory();
    }

    public void attack(Combatant target) {
        int dmg = DamageCalculator.calculateDamage(this, target);
        target.takeDamage(dmg);
    }

    public void obtain(Item item) {
        inventory.add(item);
        System.out.println("아이템 획득: " + item.getName());
    }

    public String getName() {
        return name;
    }

    public int getHp() {
        return hp;
    }

    @Override
    public int getAtk() {
        return atk;
    }

    @Override
    public Type getType() {
        return type;
    }

    @Override
    public void takeDamage(int dmg) {
        hp -= dmg;
        if (hp < 0) hp = 0;
        System.out.println(name + " 피해 " + dmg + " (남은 HP: " + hp + ")");
    }

    @Override
    public boolean isAlive() {
        return hp > 0;
    }
}
