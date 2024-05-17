Procédure secrets seatsio

WORKSPACES
Dans seatsio, on peut créer plusieurs workspaces. Chaque workspace possède un
Secret workspace key (une clé privée) et une Public worskspace key.

Dans seatsio-react, c'est la secretKey (Secret workspace key) qui va être utilisée dans le composant <SeatsioDesigner />
ou pour faire des requêtes authentifiées à l'api de seatsio (dans ce cas, il faut encoder cette secretKey
en Base64 et utiliser une Basic Auth).
La workspacekey (ou Public worskspace key) est aussi utilisée dans le composant <SeatsioSeatingChart /> pour retrouver à
qui appartient cette chart.

EVENTS
Chaque évènement créé appartient toujours à un workspace.
Chaque event possède un id (à récupérer dans le dashboard) qui est utilisé dans le composant <SeatsioSeatingChart />

CHARTS
Chaque chart créée possède une chart key.
Un chart doit appartenir à un event.


