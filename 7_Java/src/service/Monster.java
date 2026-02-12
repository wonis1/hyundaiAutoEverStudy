package service;

import domain.Combatant;
import domain.DamageCalculator;
import domain.Type;

import java.util.Random;

public class Monster implements Combatant {

    private final String name;
    private int hp;
    private int atk;
    private Type type;

    public Monster(String name, int hp, int atk, Type type) {
        this.name = name;
        this.hp = hp;
        this.atk = atk;
        this.type = type;
    }

    @Override
    public String getName() {
        return "";
    }

    @Override
    public int getHp() {
        return 0;
    }

    @Override
    public int getAtk() {
        return 0;
    }

    @Override
    public Type getType() {
        return null;
    }

    @Override
    public void takeDamage(int dmg) {

    }

    @Override
    public boolean isAlive() {
        return false;
    }

    public void attack(Combatant target) {
        int dmg = DamageCalculator.calculateDamage(this, target);
        target.takeDamage(dmg);
    }

    public Item dropItem() {
        if (new Random().nextInt(100) < 50) {
            return new Item("슬라임 젤리");
        }
        return null;
    }
}
