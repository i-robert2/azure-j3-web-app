# Azure Static Web Apps Free SKU.
# SWA is pinned to a small set of regions; West Europe is supported.
resource "azurerm_static_web_app" "main" {
  name                = "swa-${local.base}"
  resource_group_name = azurerm_resource_group.main.name
  location            = "westeurope"
  sku_tier            = "Free"
  sku_size            = "Free"
  tags                = local.tags

  lifecycle {
    ignore_changes = [tags["created_date"]]
  }
}
