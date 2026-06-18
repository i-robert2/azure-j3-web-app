locals {
  base = "${var.project}-${var.environment}-${var.region_short}-${var.instance}"

  tags = {
    project      = var.project
    environment  = var.environment
    managed_by   = "terraform"
    keep         = "false"
    keep_until   = var.keep_until
    owner        = var.owner
    cost_center  = "learning"
    created_date = timestamp()
  }
}
