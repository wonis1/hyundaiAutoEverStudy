package domain;

public class DamageCalculator {

    private static double getMultiplier(Type attacker, Type defender) {
        if (attacker == Type.FIRE && defender == Type.GRASS) return 1.5;
        if (attacker == Type.GRASS && defender == Type.WATER) return 1.5;
        if (attacker == Type.WATER && defender == Type.FIRE) return 1.5;

        if (attacker == Type.GRASS && defender == Type.FIRE) return 0.5;
        if (attacker == Type.WATER && defender == Type.GRASS) return 0.5;
        if (attacker == Type.FIRE && defender == Type.WATER) return 0.5;

        return 1.0;
    }

    public static int calculateDamage(Combatant attacker, Combatant defender) {
        return (int) (attacker.getAtk() * getMultiplier(
                attacker.getType(),
                defender.getType()
        ));
    }
}
