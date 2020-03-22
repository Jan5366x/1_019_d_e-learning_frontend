<template>
  <section>
    <Portal to="tab_action">
      <Button theme="primary">
        Neue Lektion erstellen
      </Button>
    </Portal>
    <Button class="mb-4">Vergangene Anzeigen</Button>

    <DividingHeader>Heute</DividingHeader>
    <Card class="mb-4 text-blue-600">
      <div class="flex justify-between items-center">
        <div class="flex items-center">
          <div>
            <div class="font-medium text-lg">
              Integralrechnung 1
            </div>
            <div class="text-sm text-gray-700">
              25.03.2020 – 09:15
            </div>
          </div>
          <LoadingSpinner theme="primary" class="ml-2" />
        </div>
        <Button theme="primary">Zur Lektion</Button>
      </div>
    </Card>
    <Card class="mb-4">
      <div class="flex justify-between items-center">
        <div class="flex items-center">
          <div>
            <div class="font-medium text-lg">
              Integralrechnung 2
            </div>
            <div class="text-sm text-gray-700">
              25.03.2020 – 09:05
            </div>
          </div>
        </div>
        <Button theme="primary">Jetzt starten</Button>
      </div>
    </Card>

    <DividingHeader>Morgen</DividingHeader>
    <div class="mb-4">
      Keine Lektionen vorhanden
    </div>

    <DividingHeader>Demnächst</DividingHeader>
    <Card class="mb-4">
      <div class="flex justify-between items-center">
        <div>
          <div class="font-medium text-lg">
            Integralrechnung 2
          </div>
          <div class="text-sm text-gray-700">
            25.03.2020 – 11:00
          </div>
        </div>
        <Button>Planen</Button>
      </div>
    </Card>
    <Card class="mb-4">
      <div class="flex justify-between items-center">
        <div>
          <div class="font-medium text-lg">
            Integralrechnung 3
          </div>
          <div class="text-sm text-gray-700">
            26.03.2020 – 07:40
          </div>
        </div>
        <Button>Planen</Button>
      </div>
    </Card>
    <Card class="mb-4">
      <div class="flex justify-between items-center">
        <div>
          <div class="font-medium text-lg">
            Integralrechnung 4
          </div>
          <div class="text-sm text-gray-700">
            26.03.2020 – 8:30
          </div>
        </div>
        <Button>Planen</Button>
      </div>
    </Card>
  </section>
</template>
