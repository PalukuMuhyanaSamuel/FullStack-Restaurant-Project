import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MonGraphique } from "@/components/charts/MonGraphique";
import { Stats } from "@/components/stats/Stats";

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-4">
      {/* Ligne de statistiques */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Stats name="totVentes" titre="Total Ventes" />
        <Stats name="totClients" titre="Total Clients" />
        <Stats name="totCommandes" titre="Total Commandes" />
        <Stats name="totRevenus" titre="Total Revenus" />
      </div>

      {/* Graphiques */}
      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Ventes mensuelles</CardTitle>
          </CardHeader>
          <CardContent>
            <MonGraphique />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Autre graphique</CardTitle>
          </CardHeader>
          <CardContent>
            <MonGraphique />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
