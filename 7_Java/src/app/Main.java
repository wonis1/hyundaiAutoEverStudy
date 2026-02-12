package app;

import domain.Combatant;
import domain.Type;
import service.Character;
import service.Item;
import service.Monster;

public class Main {

    public static void main(String[] args) {

        Character hero = new Character("용사", 30, 7, Type.FIRE);
        Monster slime = new Monster("슬라임", 20, 4, Type.GRASS);

        while (hero.isAlive() && slime.isAlive()) {
            hero.attack(slime);
            if (!slime.isAlive()) break;
            slime.takeDamage(hero.getAtk());
        }

        if (hero.isAlive()) {
            Item dropped = slime.dropItem();
            if (dropped != null) {
                hero.obtain(dropped);
            }
        }
    }
}
