package domain;

import service.Item;

public interface Combatant {

    String getName();
    int getHp();
    int getAtk();
    Type getType();
    void takeDamage(int dmg);
    boolean isAlive();

    void attack(Combatant target);
}